import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sumExpenses from '../selectors/sumExpenses';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = (props) => {
    const expensesWord = props.expenseCount === 1 ? 'expense':'expenses' ;
    const formatedTotal = numeral(props.expenseTotal /100).format('$0,0.00')
    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenseCount}</span> {expensesWord}, totalling <span>{formatedTotal}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
    </div>
    )
}
    
            

const mapStateToProps = (state) =>{
    const getVisibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: getVisibleExpenses.length,
        expenseTotal: sumExpenses(getVisibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);