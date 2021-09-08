import { NavLink } from 'react-router-dom';

export default function Nav () {
    return (
        <nav className='center nav'>
            <NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink>
            <NavLink to='/newQuestion' className='nav-link' activeClassName='active'>New Question</NavLink>
            <NavLink to='/leaderBoard' className='nav-link' activeClassName='active'>Leader Board</NavLink>
            <span>Username goes here</span>
            <NavLink to='/logOut' className='nav-link' activeClassName='active'>Logout</NavLink>
        </nav>
    )
}