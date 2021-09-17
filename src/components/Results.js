import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionCardContainer from './QuestionCardContainer';

class Results extends Component {
    render() {
        const { authedUser } = this.props;
        const questionId = this.props.match.params.id;

        if (!authedUser) {
            return <Redirect to='/' />
        }
        
        return (
            <div>
                <QuestionCardContainer question={questionId} displayList={false}/>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Results);