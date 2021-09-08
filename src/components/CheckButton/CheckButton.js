import React from 'react';
import './CheckButton.css';

const CheckButton = ({ clickHandler }) => {
    return (
        <div className='btn-wrapper'>
            <button onClick={clickHandler}>Check Birthday</button>
        </div>
    )
}

export default CheckButton;