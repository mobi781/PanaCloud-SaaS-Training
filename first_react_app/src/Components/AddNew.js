import React, { useState } from 'react'

const AddNew = () => {
    let [Description, setDescription] = useState("");
    let [DescriptionAmount, setDescriptionAmount] = useState(0);
    console.log('Description,DescriptionAmount :>> ', Description, DescriptionAmount);

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
                        onChange={(e) => { setDescription(e.target.value) }}
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
                        onChange={(e) => { setDescriptionAmount(e.target.value) }}

                    />

                </div>
                <button className="btn" >Add Transaction</button>
            </div>

        </div>
    )
}

export default AddNew
