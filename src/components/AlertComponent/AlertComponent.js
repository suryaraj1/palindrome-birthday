import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/confetti.json";
import "./AlertComponent.css";

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const formatDate = (dateObj) => {
    const { day, month, year } = dateObj;
    return `${day}-${month}-${year}`;
};

const AlertComponent = ({ isDatePalindrome, dayCount, nextDate }) => {
    formatDate(nextDate);
    return (
        <div className="alert-container">
            {isDatePalindrome ? (
                <>
                    <div className="confetti-wrapper">
                        <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                        />
                    </div>
                    <div
                        className={`alert-wrapper ${
                            isDatePalindrome && "success"
                        }`}
                    >
                        <p>Hurray!! Your birthday is a Palindrome 🎉</p>
                    </div>
                </>
            ) : (
                <div className="alert-wrapper">
                    <p>{`The nearest palindrome date is ${formatDate(
                        nextDate
                    )}, you missed by ${dayCount} days 😢`}</p>
                </div>
            )}
        </div>
    );
};

export default AlertComponent;
