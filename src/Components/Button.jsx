import React from 'react';
import { useDispatch } from 'react-redux';
import { addCounter, minusCounter } from '../Store/Slices/counterSlice';

const Button = () => {
    const dispatch = useDispatch();
    
    const handleAction = () => {
        dispatch(addCounter());
    };

    const handleSub = () => {
        dispatch(minusCounter());
    };

    return (
        <>
            <button onClick={handleAction}>add</button>
            <button onClick={handleSub}>sub</button>
        </>
    );
};

export default Button;
