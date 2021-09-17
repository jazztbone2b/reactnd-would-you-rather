import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCardContainer from './QuestionCardContainer';

class QuestionList extends Component {
    render() {
        const { displayQuestions, type } = this.props;

        return (
            <div>
                {displayQuestions.length === 0 
                    ?
                        <div className='message'>There are no {type=== 1 ? 'unanswered' : 'answered'} questions.</div>
                    :
                    <ul>
                        {displayQuestions.sort((a, b) => b.timestamp - a.timestamp).map((item) => (
                            <li key={item.id}>
                                <QuestionCardContainer question={item.id} displayList={true} type={type}/>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, { type }) {
    const authedUserData = users[authedUser];

    const answeredArr = [];
    Object.keys(authedUserData.answers).forEach((id) => {
        if (questions[id]) {
            answeredArr.push(questions[id]);
        }
    });

    const unAnsweredArr = [];
    Object.keys(questions).forEach((id) => {
        if (!authedUserData.answers[id]) {
            unAnsweredArr.push(questions[id]);
        }
    });

    return {
        displayQuestions: type === 1 ? unAnsweredArr : answeredArr,
        type: type
    }
}

export default connect(mapStateToProps)(QuestionList);