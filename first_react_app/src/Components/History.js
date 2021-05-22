import React from 'react'

export const History = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">Project 1 <span>$200</span> <button className="delete-btn">X</button></li>
                <li className="minus">Grocery <span>-$50</span> <button className="delete-btn">X</button></li>
            </ul>

        </div>
    )
}
