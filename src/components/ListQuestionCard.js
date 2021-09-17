import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ListQuestionCard extends Component {
    render() {
        const { currentUser, askedQuestion } = this.props;
        
        return (
            <div className='question-card'>
                <div className='card-header'>{currentUser.name} asks:</div>

                <div className='question-content'>
                    <div className='avatar-container'>
                        <img alt={`${currentUser.name}`} className='medium-image' src={currentUser.avatarURL} />
                    </div>

                    <div className='question-detail'>
                        <div>Would you rather</div>
                        <div>...{askedQuestion.optionOne.text}...</div>
                        <NavLink to={`/question/${askedQuestion.id}`} className='sign-in-btn'>View Poll</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListQuestionCard;