import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser, logOutAuthedUser } from './authedUsers';

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