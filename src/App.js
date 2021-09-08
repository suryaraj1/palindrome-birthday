import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputComponent from './components/InputComponent/InputComponent';
import CheckButton from './components/CheckButton/CheckButton';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birthDate: "",
        }
    }

    inputHandler = date => {
        this.setState({
            birthDate: date
        }, () => console.log(this.state.birthDate))
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
            console.log('yes');
        } else {
            const [dayCount, nextDate] = this.getNextPalindromeDate(dateObj);
            console.log(dayCount, nextDate);
        }
    }
    

    onClickHandler = () => {
        const { birthDate } = this.state;
        this.isBirthdatePalindrome(birthDate);
    }

    render() {
        return (
            <div className='content-wrapper'>
                <Header />
                <div className='content-input-wrapper'>
                    <InputComponent handler={this.inputHandler}/>
                    <CheckButton clickHandler={this.onClickHandler}/>
                </div>
            </div>
        )
    }
}

export default App;