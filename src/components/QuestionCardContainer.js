import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListQuestionCard from './ListQuestionCard';
import Answered from './Answered';
import Unanswered from './Unanswered';

class QuestionCardContainer extends Component {
    render() {
        const { currentUser, askedQuestion, displayList, answered, didAnswer } = this.props;

        return (
            <div>
                {displayList 
                    ?
                    <ListQuestionCard currentUser={currentUser} askedQuestion={askedQuestion}/>
                    :
                    !answered
                        ? 
                        <Unanswered currentUser={currentUser} askedQuestion={askedQuestion} />
                        : 
                        <Answered currentUser={currentUser} askedQuestion={askedQuestion} whichAnswer={didAnswer}/>
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { question, displayList }) {
    const askedQuestion = questions[question];

    const currentUser = users[askedQuestion.author];

    const answeredQuestion1 = askedQuestion.optionOne.votes.find((user) => user === authedUser);
    const answeredQuestion2 = askedQuestion.optionTwo.votes.find((user) => user === authedUser);

    let answered = true;
    if (!answeredQuestion1 && !answeredQuestion2) {
        answered = false;
    }

    let whichAnswer = null;
    if (answered) {
        whichAnswer = answeredQuestion1 ? 1 : 2
    }

    return {
        currentUser,
        askedQuestion,
        displayList,
        answered: answered,
        didAnswer: whichAnswer
    }
}

export default connect(mapStateToProps)(QuestionCardContainer);