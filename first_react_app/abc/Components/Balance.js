import React, { useContext } from 'react'
import { Context } from '../Global/ContextApi'

const Balance = () => {
    const { Transactions } = useContext(Context);
    //create object for sum of all transactionsAmount
    const AllAmounts = Transactions.map((transacion) => transacion.Amount);

    // differciate between income and expense
    const balance = AllAmounts.reduce((acc, transaction) => (acc += transaction), 0).toFixed(2);

    return (
        <div className="rmborder">
            <h3>Balance</h3>
            <h1> ${balance}</h1>
        </div>
    )
}

export default Balance;
