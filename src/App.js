import React from 'react';
import './App.css';
import AlertComponent from './components/AlertComponent/AlertComponent';
import CheckButton from './components/CheckButton/CheckButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InputComponent from './components/InputComponent/InputComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birthDate: "",
            success: false,
            dayCount: 0,
            nextDate: "",
            clickCount: 0,
        }
    }

    inputHandler = date => {
        this.setState({
            birthDate: date
        })
    }

    reverseString = str => {
        const chars = str.split('');
        return chars.reverse().join('');
    }

    isPalindrome = str => {
        return str === this.reverseString(str);
    }

    convertDateToString = date => {
        const dateString = {
            day: '',
            month: '',
            year: ''
        }
        dateString.day = date.day < 10 ? '0' + date.day : date.day.toString();
        dateString.month = date.month < 10 ? '0' + date.month : date.month.toString();
        dateString.year = date.year.toString();
        return dateString;
    }

    // ref: neog camp guide
    getDateInAllFormats = date => {
        const ddmmyyyy = date.day + date.month + date.year;
        const mmddyyyy = date.month + date.day + date.year;
        const yyyymmdd = date.year + date.month + date.day;
        const ddmmyy = date.day + date.month + date.year.slice(-2);
        const mmddyy = date.month + date.day + date.year.slice(-2);
        const yyddmm = date.year.slice(-2) + date.day + date.month;
        return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
    }

    checkPalindromeForAllDateFormats = date => {
        const dateFormats = this.getDateInAllFormats(date);
        const palindromes = [];
        for (let i = 0; i < dateFormats.length; i += 1) {
            palindromes.push(this.isPalindrome(dateFormats[i]));
        }
        return palindromes;
    }

    isLeapYear = year => {
        if (year % 400 === 0) return  true;
        if (year % 100 === 0) return false;
        if (year % 4 === 0) return true;
        return false;
    }

    getNextDate = date => {
        let { month, year } = date;
        let day = date.day + 1;
        const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month === 2) {
            if (this.isLeapYear(year)) {
                if (day < 29) {
                    day = 1;
                    month = 3;
                }
            } else {
                if (day > 28) {
                    day = 1;
                    month = 3;
                }
            }
        } else {
            if (day > days[month - 1]) {
                day = 1;
                month += 1;
            }
        }
        if (month > 12) {
            month = 1;
            year += 1;
        }
        return {
            day,
            month,
            year
        }
    }

    getNextPalindromeDate = date => {
        let nextDate = this.getNextDate(date);
        let dayCount = 0;
        for (let i = 0; ; i += 1) {
            dayCount += 1;
            const dateString = this.convertDateToString(nextDate);
            const palindromeList = this.checkPalindromeForAllDateFormats(dateString);
            for (let i = 0; i < palindromeList.length; i += 1) {
                if (palindromeList[i]) {
                    return [dayCount, nextDate];
                }
            }
            nextDate = this.getNextDate(nextDate);
        }
    }

    isBirthdatePalindrome = birthDate => {
        const date = birthDate.split('-');
        const yyyy = date[0];
        const mm = date[1];
        const dd = date[2];
        const dateObj = {
            day: Number(dd),
            month: Number(mm),
            year: Number(yyyy)
        }
        const dateString = this.convertDateToString(dateObj);
        const palindromeList = this.checkPalindromeForAllDateFormats(dateString);
        let palindromeFound = false;

        for (let i = 0; i < palindromeList.length; i += 1) {
            const currentString = palindromeList[i];
            if (currentString) {
                palindromeFound = true;
                break;
            }
        }
        if (palindromeFound) {
            this.setState({
                success: true,
            })
        } else {
            const [dayCount, nextDate] = this.getNextPalindromeDate(dateObj);
            this.setState({
                dayCount,
                nextDate,
                success: false,
            })
        }
    }
    
    validateInput = () => {
        const { birthDate } = this.state;
        return !(birthDate === "");
    }

    onClickHandler = () => {
        const { birthDate, clickCount } = this.state;
        this.isBirthdatePalindrome(birthDate);
        this.setState({
            clickCount: clickCount + 1
        })
    }

    render() {
        const { success, dayCount, nextDate, clickCount } = this.state;
        return (
            <div className='content-wrapper'>
                <Header />
                <div className='content-input-wrapper'>
                    <InputComponent handler={this.inputHandler}/>
                    <CheckButton clickHandler={this.onClickHandler} validator={this.validateInput()}/>
                </div>
                <div className='content-alert-wrapper'>
                    {clickCount > 0 && <AlertComponent isDatePalindrome={success} dayCount={dayCount} nextDate={nextDate}/>}
                </div>
                <div className='content-footer-wrapper'>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;