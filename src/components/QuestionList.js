import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class QuestionList extends Component {
    render() {
        const { displayQuestions } = this.props;
        console.log('HERE BE PROPS:', displayQuestions);

        return (
            <ul>
                {displayQuestions.map((item) => (
                    <li key={item.id}>
                        <QuestionCard question={item} />
                    </li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, type) {
    const authedUserData = users[authedUser];

    const answeredQuestions = Object.keys(authedUserData.answers).map((id) => {
        if (questions[id]) {
            return questions[id];
        }
    });

    const unAnsweredArr = [];
    Object.keys(questions).forEach((id) => {
        if (!authedUserData.answers[id]) {
            unAnsweredArr.push(questions[id]);
        }
    });

    return {
        displayQuestions: type.type === 1 ? unAnsweredArr : answeredQuestions,
    }
}

export default connect(mapStateToProps)(QuestionList);