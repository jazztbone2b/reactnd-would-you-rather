import React, { Component } from 'react';
import QuestionList from './QuestionList';

class Home extends Component {
    state = {
        type: 1, // 1 will indicate unanswered, 2 answered
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
        console.log('TYPE', type)

        return (
            <div className='home-container'>
                <div className='center'>
                    <button
                    className='blank-btn'
                    style={{color: typeOneColor}}
                    onClick={() => this.handleChange(1)}
                    >
                        Unanswered Questions
                    </button>

                    <button 
                        className='blank-btn'
                        style={{color: typeTwoColor}}
                        onClick={() => this.handleChange(2)}
                    >
                        Answered Questions
                    </button>
                </div>
                
                <hr/>

                <div>
                    {type === 1 
                        // render the list of question based on type
                        ? <div><QuestionList type={type} /></div>
                        : <div><QuestionList type={type} /></div>
                    }
                </div>
            </div>
        )
    }
}

export default Home;