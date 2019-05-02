import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './Home';
import DriverList from './DriverList';
import UnassignedList from './UnassignedList';
import AssignJob from './AssignJob';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      drivers: null,
      unassignedJobs: null
    }
  }

  componentDidMount() {
    // call function that gets all drivers from backend
    this._getDrivers();
    this._getUnassignedJobs();
  }

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
  }

  render() {
    return (
      <div>
        <div className="nav">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/drivers">Active Jobs</Link></p>
          <p><Link to="/jobs/unassigned">Unassigned Jobs</Link></p>
        </div>
  
        <Route exact path="/" component={Home} />

        <Route path="/drivers"
          render={(props) => (
            <DriverList
              {...props}
              onLoad={this._getDrivers}
              drivers={this.state.drivers}
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
              drivers={this.state.drivers}
              updateDriverList={this._getDrivers}
              getJobs={this._getUnassignedJobs}
            />
          )}
        />
      </div>
    );
  }

  _getDrivers = async () => {
    // get drivers from the backend, save in state
    console.log('App: _getDrivers got called');
    const response = await axios.get('http://localhost:5000/drivers');
    this.setState({
        drivers: response.data
    })

  }

  _getUnassignedJobs = async () => {
    const response = await axios.get('http://localhost:5000/jobs/unassigned');
    this.setState({
        unassignedJobs: response.data
    })

  }

}

export default App;
