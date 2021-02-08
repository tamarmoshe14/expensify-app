import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

})

test('should generate setEndDate action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

    
})

test('should sort by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    }) 
})

test('should sort by date', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    }) 
})

test('should set Text Filter', ()=>{
    const action = setTextFilter("this is text")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "this is text"
    }) 
})

test('should set default Text Filter', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    }) 
})