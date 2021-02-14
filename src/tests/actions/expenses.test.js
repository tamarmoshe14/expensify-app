import { startEditExpense, startRemoveExpense, startSetExpenses, setExpenses, startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = "thisismytetuid";
const defaultAuthState = {auth:{uid}}

beforeEach((done)=>{
    const expensesData = {}
    expenses.forEach(({id, description, amount, createdAt, note})=>{
        expensesData[id] = {description, amount, createdAt, note}
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done())
})

test("should remove expense", ()=>{
    const action = removeExpense({id:"123abc"})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id :"123abc"
    })
})


test('should remove the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    store.dispatch(startRemoveExpense({id:"2"})).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:"REMOVE_EXPENSE",
            id:"2"
        })
        return database.ref(`users/${uid}/expenses/2`).once('value')
          .then((snapshot)=>{
            expect(snapshot.val()).toEqual(null) 
            done()
            })
    })
})


test("should edit expense", ()=>{
    const action = editExpense("123abc", {description:"hello"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:"123abc",
        updates:{description:"hello"}
    })
})

test('should edit the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    const updates = {
        amount: 67,    
    }
    store.dispatch(startEditExpense("1", updates)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:"EDIT_EXPENSE",
            id:"1",
            updates
        })
        return database.ref(`users/${uid}/expenses/1`).once('value')
          .then((snapshot)=>{
            expect(snapshot.val().amount).toEqual(updates.amount) 
            done()
            })
    })
})

test("should setup addExpense object with provided values", ()=>{
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test("should save new expense in database and store", (done)=>{
    const store = createMockStore(defaultAuthState)
    const expenseData = {description:"pub", amount:300, note:'', createdAt:1000}
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})


test("should save new expense with default values in database and store", (done)=>{
    const store = createMockStore(defaultAuthState)
    const expenseData = {description:"", amount:0, note:'', createdAt:0}
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

test('should setupe set Expense action with data', ()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})


test('should fetch the expenses from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
