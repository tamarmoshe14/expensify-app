export default (expenses) =>{
    if (expenses.length === 0){
        return 0
    }
    else{
        const amountsArray = expenses.map((expense)=>{return expense.amount})
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return amountsArray.reduce(reducer)
    }
}


