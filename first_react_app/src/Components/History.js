import React, { useContext } from 'react'
import { Context } from '../Global/ContextApi'


export const History = () => {
    const { data } = useContext(Context);
    console.log('data :>> ', data);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {data.map((data, index) => (

                    <li key={index} className={data.Amount < 0 ? "minus" : "plus"}>{data.Desc} <span>{data.Amount < 0 ? "-" : ""}${Math.abs(data.Amount)}</span> <button className="delete-btn">X</button></li>
                ))

                }

                {/* <li className="minus">Grocery <span>-$50</span> <button className="delete-btn">X</button></li> */}
            </ul>

        </div>
    )
}
