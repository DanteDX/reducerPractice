import React, { useState } from 'react';

export default function Form({ passValue }){
    const [ something,setSomething ] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        passValue(something); // as a prop
        setSomething('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <lable>Write Something: </lable>
            <input type="text" value={something} onChange={(e)=> setSomething(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
    )
}