import React from 'react';
import { useContext } from 'react';
import Context from '../Context/Context';


function Child() {
    let getValue = useContext(Context);
    return (
        <>
            <h3>Here we get value directly from grandparent element in Child through ContextApi</h3>
            <h5>Counter State {getValue}</h5>
            <button onClick={() => { getValue[1](++getValue[0]) }}>INCREMENT</button>
            <button onClick={() => { getValue[1](--getValue[0]) }}>DECREMENT</button>
        </>
    )
}

export default Child;