import React from 'react'

export const TransactionItem = ({transaction}) => {
    const sign = transaction.amount < 0 ? "+" : '-';

    return (
        <li className= {transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} 
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="transaction-list__delete">x</button>
        </li>
    )
}
