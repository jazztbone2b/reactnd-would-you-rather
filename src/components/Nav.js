import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleLogOut } from '../actions/shared';

class Nav extends Component {
    handleLogOutUser = () => {
        this.props.dispatch(handleLogOut());
    }

    render() {
        const { authedUser, avatar, name } = this.props;

        return (
            <nav className='center nav'>
                <NavLink exact={true} to='/' className='nav-link' activeClassName='active'>Home</NavLink>
                <NavLink to='/add' className='nav-link' activeClassName='active'>New Question</NavLink>
                <NavLink to='/leaderBoard' className='nav-link' activeClassName='active'>Leader Board</NavLink>
                 
                {authedUser !== null && 
                    <span>
                        <span>
                            <img alt={`${name}`} className='small-image' src={avatar}/>{name} &nbsp;
                        </span>
                        <NavLink to='/' className='nav-link blank-btn' activeClassName='non-active' onClick={this.handleLogOutUser}>Logout</NavLink>
                    </span>
                }
            </nav>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        authedUser,
        avatar: authedUser ? users[authedUser].avatarURL : null,
        name: authedUser ? users[authedUser].name : null
    }
}

export default connect(mapStateToProps)(Nav);