import React, { useContext } from 'react'
import { Context } from '../Global/ContextApi'


export const History = () => {
    const { Description } = useContext(Context);
    // console.log('Rdata :>> ', Rdata);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {Description.map((Description, index) => (

                    <li key={index} className={Description.Amount < 0 ? "minus" : "plus"}>{Description.Desc} <span>{Description.Amount < 0 ? "-" : ""}${Math.abs(Description.Amount)}</span> <button className="delete-btn">X</button></li>
                ))

                }

                {/* <li className="minus">Grocery <span>-$50</span> <button className="delete-btn">X</button></li> */}
            </ul>

        </div>
    )
}
