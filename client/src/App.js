import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './Home';
import DriverList from './DriverList';
import UnassignedList from './UnassignedList';
import AssignJob from './AssignJob';
import CompletedList from './CompletedList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      allDrivers: null,
      unassignedJobs: null,
      activeDrivers: null,
      completedJobs: null
    }
  }

  componentDidMount() {
    // call function that gets all drivers from backend
    this._getDrivers();
    this._getUnassignedJobs();
    this._getActiveDrivers();
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/drivers">Active Jobs</Link></p>
          <p><Link to="/jobs/unassigned">Unassigned Jobs</Link></p>
          <p><Link to="/jobs/completed">Completed Jobs</Link></p>
        </div>
  
        <Route exact path="/" component={Home} />

        <Route path="/drivers"
          render={(props) => (
            <DriverList
              {...props}
              onLoad={this._getActiveDrivers}
              drivers={this.state.activeDrivers}
              completed={this._getCompletedJobs}
            />
          )}
        />

        <Route path="/jobs/unassigned" render={(props) => (
          <UnassignedList 
            {...props}
            jobs={this.state.unassignedJobs}
          />
        )}
        />

        <Route path="/jobs/unassigned/:id"
          render={(props) => (
            <AssignJob
              {...props}
              drivers={this.state.allDrivers}
              updateDriverList={this._getActiveDrivers}
              updateAllDrivers={this._getDrivers}
              getJobs={this._getUnassignedJobs}
            />
          )}
        />
        <Route path="/jobs/completed" 
          render={(props) => (
            <CompletedList 
              {...props}
              completed={this.state.completedJobs}
            />
          )}
        />
        
      </div>
    );
  }

  _getDrivers = async () => {
    // get all drivers from the backend, save in state
    const response = await axios.get('/drivers');
    this.setState({
        allDrivers: response.data
    })

  }
  // gets just those drivers that have a job assigned to them
  _getActiveDrivers = async () => {
    const response = await axios.get('/drivers/active')
    this.setState({
      activeDrivers: response.data
    })

  }
  // gets jobs that are not assigned
  _getUnassignedJobs = async () => {
    const response = await axios.get('/jobs/unassigned');
    this.setState({
        unassignedJobs: response.data
    })

  }
  // gets jobs that are completed
  _getCompletedJobs = async () => {
    const response = await axios.get('/jobs/completed');
    this.setState({
      completedJobs: response.data
    })

  }

}

export default App;
