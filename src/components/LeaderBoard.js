import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                {users && users.map((user) => (
                    <div className='question-card' key={user.id}>

                        <div className='question-content'>
                            <div className='avatar-container'>
                                <img alt={`${user.name}`} className='medium-image' src={user.avatarURL} />
                            </div>

                            <div className='question-detail'>
                                <h3>{user.name}</h3>

                                <div className='totals-container'>
                                    <div className='total-line-container'>Answered Questions: 
                                        <div>{user.totalAnswered}</div>
                                    </div>

                                    <hr className='total-split'/>

                                    <div className='total-line-container'>Created Questions: 
                                        <div>{user.totalAsked}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='grand-total-container'>
                                <div className='score-header'>
                                    <div>Score</div>
                                </div>

                                <div className='grand-total'>
                                    <div>
                                        {user.total}
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map((user) => {
            return users[user];
        }).sort((a, b) => {
            const totalQuestionsAskedA = a.questions.length;
            const totalQuestionsAskedB = b.questions.length;

            const totalQuestionsAnsA = Object.keys(a.answers).length;
            const totalQuestionsAnsB = Object.keys(b.answers).length;

            const totalA = totalQuestionsAskedA + totalQuestionsAnsA;
            const totalB = totalQuestionsAskedB + totalQuestionsAnsB;

            a.total = totalA;
            a.totalAsked = totalQuestionsAskedA;
            a.totalAnswered = totalQuestionsAnsA;

            b.total = totalB;
            b.totalAsked = totalQuestionsAskedB;
            b.totalAnswered = totalQuestionsAnsB;


            return totalB - totalA;
        })
    }
}

export default connect(mapStateToProps)(LeaderBoard);