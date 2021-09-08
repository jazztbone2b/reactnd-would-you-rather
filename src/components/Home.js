import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='center'>
                    <div>Unanswered Questions</div>
                    <div>Answered Questions</div>
                </div>
                
                <hr/>

                <div>
                    <ul>
                        <li>Question cards go here</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;