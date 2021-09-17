import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Answered extends Component {
    render() {
        const { currentUser, askedQuestion, whichAnswer } = this.props;

        const totalVotes = askedQuestion.optionOne.votes.length + askedQuestion.optionTwo.votes.length;
        const optionOneTotal = askedQuestion.optionOne.votes.length;
        const optionTwoTotal = askedQuestion.optionTwo.votes.length;

        const optionOnePercentage = optionOneTotal === 0 ? 0 : Math.floor((optionOneTotal / totalVotes) * 100);
        const optionTwoPercentage = optionTwoTotal === 0 ? 0 : Math.floor((optionTwoTotal / totalVotes) * 100);

        const answeredStyle = {
            background: '#ffcdd2',
            color: '#b71c1c',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            padding: '10px',
            marginBottom: '10px'
        }

        const unAnsweredStyle = {
            background: '#f5f5f5',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px'
        }

        return (
            <div>
                <div className='question-card'>
                    <div className='card-header'>Asked by {currentUser.name}</div>

                    <div className='question-content'>
                        <div className='avatar-container'>
                            <img alt={`${currentUser.name}`} className='medium-image' src={currentUser.avatarURL} />
                        </div>

                        <div className='question-detail'>
                            <h3>Results:</h3>

                            {whichAnswer === 1 &&
                                <div className='your-vote'>Your Vote</div>
                            }
                            <div className='question-result' style={whichAnswer === 1 ? answeredStyle : unAnsweredStyle}>
                                <div>Would you rather {askedQuestion.optionOne.text}?</div>
                                
                                <ProgressBar percent={optionOnePercentage}/>

                                <div className='question-totals'>{optionOneTotal} out of {totalVotes} votes</div>
                            </div>

                            {whichAnswer === 2 &&
                                <div className='your-vote'>Your Vote</div>
                            }
                            <div className='question-result' style={whichAnswer === 2 ? answeredStyle : unAnsweredStyle}>
                                <div>Would you rather {askedQuestion.optionTwo.text}?</div>

                                <ProgressBar percent={optionTwoPercentage}/>

                                <div className='question-totals'>{optionTwoTotal} out of {totalVotes} votes</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Answered;