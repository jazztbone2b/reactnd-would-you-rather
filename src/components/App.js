import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import SignOn from './SignOn';
import Home from './Home';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Results from './Results';
import PageNotFound from './PageNotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <h3 className='center'>Would You Rather?</h3>

            <br/>
    
            <div>
              <Nav />
              <div>
                {this.props.loading
                  ? <Route path='/' component={SignOn} />
                  :
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/leaderBoard' exact component={LeaderBoard} />
                    <Route path='/question/:id' component={Results} />
                    <Route path='/' component={PageNotFound}/>
                  </Switch>
                }
              </div>
            </div>
          </div>
        </Fragment>
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
