import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import React from 'react';
import { shallow } from 'enzyme';
import {filters, altfilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
                        filters={filters}
                        setTextFilter={setTextFilter}
                        sortByAmount={sortByAmount}
                        sortByDate={sortByDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        />)

})

test('should render expense list filters correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should render expense list filters with alt data correctly', ()=>{
    wrapper.setProps({
        filters:altfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text changes', ()=>{
    const value = altfilters.text
    wrapper.find('input').prop('onChange')({target:{value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(altfilters.text)
})

test('should handle sort by date', ()=>{
    const value = "date"
    wrapper.find('select').prop('onChange')({target:{value}})
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should handle sort by amount', ()=>{
    const value = "amount"
    wrapper.find('select').prop('onChange')({target:{value}})
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle date changes', ()=>{
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:altfilters.startDate, endDate:altfilters.endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate)
})

test('should handle focus changes', ()=>{
    wrapper.find('DateRangePicker').prop('onFocusChange')(null)
    expect(wrapper.state('calendarFocused')).toBe(null)
})
