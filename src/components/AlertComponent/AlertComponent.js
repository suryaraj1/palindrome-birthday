import React from 'react';
import './AlertComponent.css';

const formatDate = dateObj => {
    const { day, month, year } = dateObj;
    return `${day}-${month}-${year}`;
}

const AlertComponent = ({ isDatePalindrome, dayCount, nextDate }) => {
    formatDate(nextDate);
    return (
        <div className={`alert-wrapper ${isDatePalindrome && 'success'}`}>
            {isDatePalindrome ? <p>Hurray!! Your birthday is a Palindrome 🎉</p> : 
            <p>{`The nearest palindrome date is ${formatDate(nextDate)}, you missed by ${dayCount} days 😢`}</p>}
        </div>
    )
}

export default AlertComponent;