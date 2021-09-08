import React from 'react';
import './AlertComponent.css';

const AlertComponent = ({ isDatePalindrome, dayCount, nextDate }) => {
    return (
        <div className={`alert-wrapper ${isDatePalindrome && 'success'}`}>
            {isDatePalindrome ? <p>Hurray!! Your birthday is a Palindrome 🎉</p> : 
            <p>{`The nearest palindrome date is ${nextDate}, you missed by ${dayCount} days`}</p>}
        </div>
    )
}

export default AlertComponent;