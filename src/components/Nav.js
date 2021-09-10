import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { handleLogOut } from '../actions/shared';

class Nav extends Component {
    handleLogOutUser = () => {
        this.props.dispatch(handleLogOut());
        window.location.reload('/');
    }

    render() {
        console.log('PROPS', this.props)
        const { authedUser, avatar, name } = this.props;

        // need to get authedUser data and rerender here
        return (
            <nav className='center nav'>
                <NavLink exact={true} to='/' className='nav-link' activeClassName='active'>Home</NavLink>
                <NavLink to='/newQuestion' className='nav-link' activeClassName='active'>New Question</NavLink>
                <NavLink to='/leaderBoard' className='nav-link' activeClassName='active'>Leader Board</NavLink>
                
                {authedUser !== null && 
                    <span>
                        <span>
                            <img className='small-image' src={avatar}/>{name} &nbsp;
                        </span>
                        <button to='/' className='nav-link blank-btn' onClick={this.handleLogOutUser}>Logout</button>
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