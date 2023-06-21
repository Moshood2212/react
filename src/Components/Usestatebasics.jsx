import React from 'react'
import { useState } from 'react'

const Usestatebasics = () => {
    const [name, setName] = useState("user");
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setName("John");
    };



    const increase = () => {
        setNum(num + 1);
    };
    const decrease = () => {
        setNum(num - 1);
    };
    const reset = () => {
        setNum(0)
    };
    const resetuser = () => {
        setName("")
    }

    return (
        <div><h1>Use state Basic</h1>
            <h2>welcome  {name} </h2>
            <h1>  {num} </h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
            <button onClick={resetuser}>Resetuser</button>
            <button onClick={handleClick}>NAme</button>
        </div>
    );
};

export default Usestatebasics;