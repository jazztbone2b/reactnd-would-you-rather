import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class QuestionCard extends Component {
    render() {
        console.log('PROPS', this.props)
        const { users, askedQuestion } = this.props;
        const currentUser = users[askedQuestion.author];

        return (
            <div className='question-card'>
                <div className='card-header'>{currentUser.name} asks:</div>
                <hr/>
                <div className='question-content'>
                    <img className='medium-image' src={currentUser.avatarURL} />

                    {/* State should change the view of the content below */}
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

function mapStateToProps({ users }, question) {
    const askedQuestion = question.question;

    return {
        users,
        askedQuestion
    }
}

export default connect(mapStateToProps)(QuestionCard);