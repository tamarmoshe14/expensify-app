import React from 'react';
import { connect } from 'react-redux';
import sumExpenses from '../selectors/sumExpenses';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = (props) => {
    const expensesWord = props.expenseCount === 1 ? 'expense':'expenses' ;
    const formatedTotal = numeral(props.expenseTotal /100).format('$0,0.00')
    return (
    <div>
        <h3>Viewing {props.expenseCount} {expensesWord} totalling {formatedTotal}</h3>
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