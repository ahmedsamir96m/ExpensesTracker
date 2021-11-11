import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div className="inc-exp-container__inc">
                <p>Income</p>    
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div className="inc-exp-container__exp">
                <p>Expense</p>    
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>
        </div>  
    )
}
