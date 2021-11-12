import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    
    const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)) * -1;

    return (
        <div className="inc-exp-container">
            <div className="inc-exp-container__inc">
                <p>Income</p>    
                <p id="money-plus" className="money plus">${income}</p>
            </div>
            <div className="inc-exp-container__exp">
                <p>Expense</p>    
                <p id="money-minus" className="money minus">${expense}</p>
            </div>
        </div>  
    )
}
