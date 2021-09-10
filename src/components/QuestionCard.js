import React, { Component } from 'react';

class QuestionCard extends Component {
    render() {
        const { question } = this.props;
        console.log('QUESTION CARD', question);
        return (
            <div className='question-card'>
                <div className='card-header'>{question.author} asks:</div>
                <hr/>
                <div className='question-content'>
                    <div class='medium-image'>
                        left
                    </div>
                    {/* need to get the image for the user */}
                    <div className='question-detail'>
                        <div>Would you rather</div>
                        <div>...{question.optionOne.text}...</div>
                        <button className='sign-in-btn'>View Poll</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionCard;