import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    onChangeHandler = event => {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div className='input-wrapper'>
                <input className='input-box' type="date" onChange={this.onChangeHandler}/>
            </div>
        )
    }
}

export default InputComponent;