import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    Desc: [
        { Desc: "Project 2 complete", Amount: 500 },
        { Desc: "Project 1 complete", Amount: 540 },
        { Desc: "Grocery", Amount: -500 },
    ]
}

// create Global Context

export const Context = createContext(initialState);

// create reducer

export const GlobalP = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        < Context.Provider value={{ Description: state.Desc }} >
            { children}
        </Context.Provider >
    );
}
