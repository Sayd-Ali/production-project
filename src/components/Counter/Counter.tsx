import {useState} from 'react';
import classes from  './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div className={classes.Counter}>
            <h1>{count}</h1>
            <button onClick={inc}>increment</button>
        </div>
    )
}
