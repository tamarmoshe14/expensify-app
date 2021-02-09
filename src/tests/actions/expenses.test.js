import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test("should remove expense", ()=>{
    const action = removeExpense({id:"123abc"})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id :"123abc"
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

test("should setup addExpense object with provided values", ()=>{
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test("should save new expense in database and store", (done)=>{
    const store = createMockStore()
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})


test("should save new expense with default values in database and store", (done)=>{
    const store = createMockStore()
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

// test("should add default expense", ()=>{
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description:'',
//             note:'',
//             amount:0,
//             createdAt:0
//         }
//     })
// })