import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        optionOneText: null,
        optionTwoText: null,
        author: this.props.authedUser,
        submitted: false
    }

    handleChangeOne = (e) => {
        this.setState(() => ({
            optionOneText: e.target.value
        }))
    }

    handleChangeTwo = (e) => {
        this.setState(() => ({
            optionTwoText: e.target.value
        }))
    }

    handleSubmit = () => {
        const questionInfo = {
            optionOneText: this.state.optionOneText,
            optionTwoText: this.state.optionTwoText,
            author: this.state.author
        }

        this.props.dispatch(handleAddQuestion(questionInfo))
            .then(() => {
                this.setState(() => ({
                    optionOneText: '',
                    optionTwoText: '',
                    submitted: true
                }))
            })
    }

    validate = () => {
        if (this.state.optionOneText !== null && this.state.optionTwoText !== null) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to='/' />
        }

        return (
            <div className='question-card'>
                <div className='card-header'>
                    <h3>Create New Question</h3>
                </div>

                <div>
                    <span className='small-text'>Complete the question:</span>

                    <h4>Would you rather...</h4>

                    <div className='question-creation'>
                        <input
                        className='question-input'
                        placeholder='Type your question here.'
                        onChange={this.handleChangeOne}
                    />
  
                        <span className='or-text'>OR</span>

                        <input
                            className='question-input'
                            placeholder='Type your question here.'
                            onChange={this.handleChangeTwo}
                        />
                    </div>

                    <button 
                        className='sign-in-btn'
                        disabled={this.validate()}
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);