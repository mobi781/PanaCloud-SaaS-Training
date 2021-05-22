import React from 'react'

const AddNew = () => {
    return (
        <div>
            <h3>Add Transactions</h3>
            <div className="form">
                <div className="form-control">
                    <label htmlFor="Description">
                        Description


                </label>
                    <input
                        type="text"
                        placeholder="Plaese Enter the transation detail"
                        id="Description"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="Description Amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        placeholder="Plaese Enter the amount"
                        id="Description Amount"
                    />

                </div>
                <button className="btn">Add Transaction</button>
            </div>

        </div>
    )
}

export default AddNew
