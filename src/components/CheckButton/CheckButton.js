import React from 'react';
import './CheckButton.css';

const CheckButton = ({ clickHandler, validator }) => {
    console.log(validator);
    return (
        <div className='btn-wrapper'>
            <button onClick={clickHandler} disabled={!validator} className={`${!validator && "disabled"}` }>Check Birthday</button>
        </div>
    )
}

export default CheckButton;