import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render the summary correctlry with one expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
    expect(wrapper).toMatchSnapshot();

})

test('should render the summary correctlry', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={2767035}/>);
    expect(wrapper).toMatchSnapshot();

})