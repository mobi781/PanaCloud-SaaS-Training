import React, { useState, useContext } from 'react'
import { Context, } from '../Global/ContextApi'

const AddNew = () => {
    let { Addtransaction, Transactions } = useContext(Context);
    let [Description, setDescription] = useState("");
    let [DescriptionAmount, setDescriptionAmount] = useState(0);
    function handleChange(event) {
        event.preventDefault();
        Addtransaction({
            Desc: Description,
            Amount: DescriptionAmount
        })
    }


    return (
        <div>
            <h3>Add Transactions</h3>
            <form className="form" onSubmit={handleChange}>

                <label htmlFor="Description">
                    Description


                </label>
                <input

                    type="text"
                    placeholder="Plaese Enter the transation detail"
                    id="Description"
                    onChange={(e) => { setDescription(e.target.value) }}
                />


                <label htmlFor="Description Amount">
                    Amount
                    </label>
                <input
                    type="number"
                    placeholder="Plaese Enter the amount"
                    id="Description Amount"
                    onChange={(e) => { setDescriptionAmount(e.target.value) }}

                />


                <input className="btn" type="submit" value="ADD TRANSACTION" />
            </form>

        </div>
    )
}

export default AddNew
