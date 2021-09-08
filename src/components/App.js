import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import SignOn from './SignOn';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.authedUser);
    return (
      <div>
        <h3 className='center'>Would You Rather?</h3>
        <hr></hr>
        <div>
          <Nav />
          {
          // if a user is opening the app for the first time, render the sign on component
          // otherwise, render the home component
          }
          {this.props.loading === true
            ? <SignOn />
            : <Home />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
