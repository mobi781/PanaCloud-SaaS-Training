import React, { useContext } from 'react'
import { Context } from '../Global/ContextApi'


export const History = () => {
    const { Transactions } = useContext(Context);
    const { delTransaction } = useContext(Context);
    // console.log('Transactions :>> ', Transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {Transactions.map((Transactions) => (

                    <li key={Transactions.id} className={Transactions.Amount < 0 ? "minus" : "plus"}>{Transactions.Desc} <span>{Transactions.Amount < 0 ? "-" : ""}${Math.abs(Transactions.Amount)}</span> <button className="delete-btn" onClick={() => console.log("delete button pressed")}>X</button></li>
                ))

                }

                {/* <li className="minus">Grocery <span>-$50</span> <button className="delete-btn">X</button></li> */}
            </ul>

        </div>
    )
}
