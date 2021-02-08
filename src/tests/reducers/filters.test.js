import filterReducer from '../../reducers/filters';
import moment from 'moment';

test("should setup default filter", ()=>{
    const state = filterReducer(undefined, {type:"@@INIT"})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test("should setup sort by amount", ()=>{
    const state = filterReducer(undefined, {type:"SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe('amount')
})

test("should setup sort by date", ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = {type:'SORT_BY_DATE'}
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})


test("should setup text filter", ()=>{
    const action = {type:'SET_TEXT_FILTER', text:"tamar"}
    const state = filterReducer(undefined, action)
    expect(state.text).toBe('tamar')
})

test("should setup startDate filter", ()=>{
    const action = {type:'SET_START_DATE', startDate:moment(0)}
    const state = filterReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test("should setup endDate filter", ()=>{
    const action = {type:'SET_END_DATE', endDate:moment(0)}
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0))
})