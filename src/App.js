import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import InputComponent from './components/InputComponent/InputComponent';

const App = () => {
    return (
        <div className='content-wrapper'>
            <Header />
            <InputComponent />
        </div>
    )
}

export default App;