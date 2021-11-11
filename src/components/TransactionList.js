import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className="transaction-list list">
                <li className="transaction-list__minus minus">
                    Cash 
                    <span>$400</span>
                    <button className="transacion-list__delete">x</button>
                </li>
            </ul>
        </div>
    )
}
