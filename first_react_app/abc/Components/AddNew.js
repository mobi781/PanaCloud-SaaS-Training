import React, { useState, useContext } from 'react'
import { Context } from '../Global/ContextApi'

const AddNew = () => {
    const { addTransaction } = useContext(Context);
    // let { Addtransaction, Transactions } = useContext(Context);
    let [Description, setDescription] = useState("");
    let [DescriptionAmount, setDescriptionAmount] = useState();
    const handleChange = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            Desc: Description,
            Amount: +DescriptionAmount
        }
        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add Transactions</h3>
            <form className="form" >

                <label >
                    Description


                </label>
                <input
                    // value={Description}
                    type="text"
                    placeholder="Plaese Enter the transation detail"
                    id="Description"
                    onChange={(e) => { setDescription(e.target.value) }}
                />


                <label >
                    Amount
                    </label>
                <input
                    // value={DescriptionAmount}
                    type="number"
                    placeholder="Plaese Enter the amount"
                    id="Description Amount"
                    onChange={(e) => { setDescriptionAmount(e.target.value) }}

                />


                <button className="btn" type="submit" value="ADD TRANSACTION" onClick={handleChange}>ADD TRANSACTION</button>
            </form>

        </div>
    )
}

export default AddNew
