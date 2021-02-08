import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () =>(
    <div>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
);


export default ExpenseDashboardPage;
