import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.random() * 98846545465498453132167897654 * Math.random(),
            text,
            amount: parseFloat(amount)
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form id="form" className="new-transaction"
            onSubmit={(e) => {handleSubmit(e)}}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negtive - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} ></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
