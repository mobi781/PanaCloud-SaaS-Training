import React from 'react';
import { useContext } from 'react';
import Context from '../Context/Context';


function Child() {
    let getValue = useContext(Context);
    return (
        <>
            <h3>Here we get value directly from grandparent element in Child through ContextApi</h3>
            <h5>this is {getValue}</h5>
        </>
    )
}

export default Child;