import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { handleAuthedUser } from '../actions/shared';

class SignOn extends Component {
    state = {
        selectedUser: null
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState(() => ({
            selectedUser: e.target.value
        }))
    }

    setAuthedUser = () => {
        this.props.dispatch(handleAuthedUser(this.state.selectedUser));
    }

    render() {
        return (
            <div className='card'>
                <div>
                    <h4>Welcome to the Would You Rather App!</h4>
                    <span>Please sign in to continue.</span>
                </div>

                <div>
                    <img src={logo} className='medium-image'/>
                </div>

                <div>
                    <select className='select-user' onChange={this.handleChange}>
                        <option></option>
                        <option value='USEtyR'>User 1</option>
                    </select>
                </div>

                <button className='sign-in-btn' onClick={this.setAuthedUser}>Sign In</button>
            </div>
        )
    }
}

export default connect()(SignOn);