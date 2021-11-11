import React, {useContext} from 'react'

import { TransactionItem } from './TransactionItem';
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="transaction-list list">
                {transactions.map(transaction => (<TransactionItem  key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
