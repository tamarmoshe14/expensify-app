import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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

test("should add expense", ()=>{
    const expenseData = {description:'rent', note:'last month rent', amount:109500, createdAt:100}
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("should add default expense", ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    })
})