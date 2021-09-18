import React, { Component } from 'react';
import QuestionList from './QuestionList';

class Home extends Component {
    state = {
        type: 1,
        typeOneColor: '#e53935',
        typeTwoColor: 'none'
    }

    handleChange = (num) => {
        this.setState(() => ({
            type: num,
            typeOneColor: num === 1 ? '#e53935' : 'black',
            typeTwoColor: num === 2 ? '#e53935' : 'black'
        }))
    }

    render() {
        const { type, typeOneColor, typeTwoColor } = this.state;

        return (
            <div className='home-container'>
                <div className='center solid-red-line'>
                    <button
                    className='blank-btn hdr-btn'
                    style={{color: typeOneColor}}
                    onClick={() => this.handleChange(1)}
                    >
                        Unanswered Questions
                    </button>

                    <button 
                        className='blank-btn hdr-btn'
                        style={{color: typeTwoColor}}
                        onClick={() => this.handleChange(2)}
                    >
                        Answered Questions
                    </button>
                </div>

                <div>
                    {type === 1
                        ? <div><QuestionList type={type} /></div>
                        : <div><QuestionList type={type} /></div>
                    }
                </div>
            </div>
        )
    }
}

export default Home;