import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './redux/ducks/counter';


const Counter = (props) => {
   
    const { name } = props;
    const dispatch = useDispatch();

    const [ votes, setVotes ] = React.useState(0);

    const handleIncrement = () => {
       dispatch(increment());
       setVotes( votes + 1 );
    }

    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes - 1)
    }

    return (
        <div>
            <div>
                <h2>{ name } got votes {votes} </h2>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
};

export default Counter;