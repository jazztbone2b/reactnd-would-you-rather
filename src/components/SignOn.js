import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { handleAuthedUser } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class SignOn extends Component {
    state = {
        selectedUser: null
    }

    handleChange = (e) => {
        this.setState(() => ({
            selectedUser: e.target.value
        }))
    }

    setAuthedUser = () => {
        Promise.resolve(this.props.dispatch(handleAuthedUser(this.state.selectedUser)))
            .then(() => {
                return <Redirect to='/' />
            })
    }

    render() {
        const { users } = this.props;
        
        const { selectedUser } = this.state;

        return (
            <div className='card'>
                <div>
                    <h4>Welcome to the Would You Rather App!</h4>
                    <span>Please sign in to continue.</span>
                </div>

                <div>
                    <img alt='react-icon' src={logo} className='medium-image'/>
                </div>

                <form>
                    <select className='select-user' onChange={this.handleChange}>
                        <option></option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}> 
                                {user.name}
                            </option>
                        ))}
                    </select>
                </form>

                <button 
                    className='sign-in-btn'
                    onClick={this.setAuthedUser}
                    disabled={!selectedUser}>
                        Sign In
                </button>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map((id) => {
            return {
                id: users[id].id,
                name: users[id].name,
                avatar: users[id].avatarURL
            }
        })
    }
}

export default connect(mapStateToProps)(SignOn);