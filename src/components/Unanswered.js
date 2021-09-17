import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/shared';

class Unanswered extends Component {
    state = {
        selectedAnswer: null
    }

    handleChange = (e) => {
        this.setState(() => ({
            selectedAnswer: e.target.value
        }))
    }

    handleSubmit = () => {
        const info = {
            qid: this.props.askedQuestion.id,
            answer: this.state.selectedAnswer
        }

        this.props.dispatch(handleAddQuestionAnswer(info));
    }

    render() {
        const { currentUser, askedQuestion } = this.props;

        return (
            <div>
                <div className='question-card'>
                    <div className='card-header'>{currentUser.name} asks:</div>

                    <div className='question-content'>
                        <div className='avatar-container'>
                            <img alt={`${currentUser.name}`} className='medium-image' src={currentUser.avatarURL} />
                        </div>

                        <div className='question-detail'>
                            <h3>Would You Rather...</h3>
                            <div className='radio-container'>
                                <input 
                                    name='whichQuestion'
                                    type='radio'
                                    value='optionOne'
                                    onChange={this.handleChange}
                                />
                                {askedQuestion.optionOne.text}?
                            </div>
                            <div className='radio-container'>
                                <input
                                    name='whichQuestion'
                                    type='radio'
                                    value='optionTwo'
                                    onChange={this.handleChange}
                                />
                                {askedQuestion.optionTwo.text}?
                            </div>

                            <div>
                                <button 
                                    disabled={!this.state.selectedAnswer}
                                    className='sign-in-btn'
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default connect()(Unanswered);