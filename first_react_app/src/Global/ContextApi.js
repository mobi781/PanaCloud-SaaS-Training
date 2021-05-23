import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = [
    { Desc: "Project 2 complete", Amount: 500 },
    { Desc: "Project 1 complete", Amount: 40 },
    { Desc: "Grocery", Amount: -500 },
]


// create Global Context

export const Context = createContext(initialState);

// create reducer

export const GlobalP = ({ children }) => {
    let [state, dispatch] = useReducer(Reducer, initialState);

    function Addtransaction(Obj) {
        dispatch({
            type: "Add",
            payload: { Desc: Obj.Desc, Amount: Obj.Amount }
        })
    }

    return (
        < Context.Provider value={{
            Transactions: state,
            Addtransaction
        }} >
            { children}
        </Context.Provider >
    );
}
