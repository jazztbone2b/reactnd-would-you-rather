import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';
import { receiveUsers, addUserAnswer, addUserQuestion } from './users';
import { receiveQuestions, addQuestionAnswer, addQuestion } from './questions';
import { setAuthedUser, logOutAuthedUser } from './authedUsers';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
            });
    }
}

export function handleAuthedUser(user) {
    return (dispatch) => {
        dispatch(setAuthedUser(user));
    }
}

export function handleLogOut() {
    return (dispatch) => {
        dispatch(logOutAuthedUser())
    }
}

export function handleAddQuestionAnswer({qid, answer}) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => {
                dispatch(addQuestionAnswer({authedUser,qid,answer}))
                dispatch(addUserAnswer({authedUser, qid, answer}))
                dispatch(hideLoading());
            }) 
    }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author}) {
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestion({ optionOneText, optionTwoText, author})
            .then((result) => {
                dispatch(addQuestion(result))
                dispatch(addUserQuestion(result))
                dispatch(hideLoading());
                
            })
    }
}
