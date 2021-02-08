import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const now = moment();

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description:'',
            notes:props.expense ? props.expense.notes:'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt:props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            error:''
        };
    }

    onFocusChange = ({ focused }) =>{
        this.setState(()=>({ calendarFocused: focused }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({ amount }));
        }

    };
    onDateChange = (createdAt) =>{
        if (createdAt){
            this.setState(()=>({createdAt}));
        }
        
    }

    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(()=>({notes}));
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({ description }))}

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'Please provide decription and amount.'}));
        } else{
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount:parseFloat(this.state.amount, 10) *100,
                createdAt:this.state.createdAt.valueOf(),
                notes:this.state.notes,
            })

        }
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}>
            </input>
            <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}>
            </input>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused = {this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            <textarea placeholder="Add some notes to your expense." value={this.state.notes} onChange={this.onNotesChange}>
            </textarea>
            <button>Add Expense</button>
            </form>
            
            </div>
        );
    }
}