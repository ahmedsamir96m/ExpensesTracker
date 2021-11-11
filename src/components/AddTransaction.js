import React, { useState } from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form id="form" className="new-transaction">
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
