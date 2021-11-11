import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="transaction-list list">
                {transactions.map(transaction => (
                    <li className="transaction-list__minus minus">
                    {transaction.text} 
                    <span>{transaction.amount}</span>
                    <button className="transacion-list__delete">x</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
