import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test("should set default state", ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([]);
})

test("should remove expense by id", ()=>{
    const action = {type: "REMOVE_EXPENSE", id:expenses[1].id}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])

})

test("should not remove expense if id not found", ()=>{
    const action = {type: "REMOVE_EXPENSE", id:"-1"}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//adding expense
test("should add expense", ()=>{
    const newExpense = {
        id:4,
        description:"ball",
        amount: 2300,
        note:'',
        createdAt:moment(0)
    }
    const action = {type: "ADD_EXPENSE", expense:newExpense}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

//should edit

test("should edit expense by id", ()=>{
    const updates = {note: "new note"}
    const action = {type: "EDIT_EXPENSE", id:expenses[1].id, updates}
    const state = expensesReducer(expenses, action)
    expect(state[1].note).toBe("new note")
})
//should not edit
test("should not edit expense if id not found", ()=>{
    const updates = {note: "new note"}
    const action = {type: "EDIT_EXPENSE", id:5, updates}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', ()=>{
    const newExpenses = [{
        description: "hoola",
        amount: 500,
        createdAt:0,
        note:''
    }, 
    {
        description: "hoop",
        amount: 300,
        createdAt:0,
        note:''
    }]
    const action = {type: "SET_EXPENSES", expenses: newExpenses}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(newExpenses)
})