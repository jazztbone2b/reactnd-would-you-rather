import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import SignOn from './SignOn';
import Home from './Home';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Results from './Results';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.authedUser)
    return (
      <Router>
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
              ? <Route path='/' component={SignOn} />
              : (
                <div>
                  <Route path='/'exact component={Home} />
                  <Route path='/newQuestion' exact component={NewQuestion} />
                  <Route path='/leaderBoard' exact component={LeaderBoard} />
                  <Route path='/question/:id' component={Results} />
                </div>
              )
            } 
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
