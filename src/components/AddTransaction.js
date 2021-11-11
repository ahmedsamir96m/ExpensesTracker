import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form id="form" className="new-transaction">
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."></input>
                </div>
                <div className="form-control">
                    <label for="amount">
                        Amount <br/>
                        (negtive - expense, positive - income)
                    </label>
                    <input type="number"></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
