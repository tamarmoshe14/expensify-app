import expenses from '../fixtures/expenses'
import sumExpenses from '../../selectors/sumExpenses';


test('should return 0 if no expenses', ()=>{
    const result = sumExpenses([])
    expect(result).toEqual(0)
})

test('should correctly add up a single expense', ()=>{
    const result = sumExpenses([expenses[1]])
    expect(result).toEqual(expenses[1].amount)
})

test('should correctly add up a single expense', ()=>{
    const result = sumExpenses(expenses)
    expect(result).toEqual(200295)
})