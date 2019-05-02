import React from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Home from './Home';
import DriverList from './DriverList';
import JobList from './JobList';
import AssignJob from './AssignJob';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      drivers: null
    }
  }

  componentDidMount() {
    // call function that gets all drivers from backend
    this._getDrivers();
  }

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
  }

  render() {
    return (
      <div>
        <div className="nav">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/drivers">Drivers</Link></p>
          <p><Link to="/jobs">Jobs</Link></p>
        </div>
  
        <Route exact path="/" component={Home} />
        {/* <Route path="/drivers" component={DriverList} /> */}

        <Route path="/drivers"
          render={(props) => (
            <DriverList
              {...props}
              onLoad={this._getDrivers}
              drivers={this.state.drivers}
            />
          )}
        />

        <Route path="/jobs" component={JobList} />

        <Route path="/jobs/assign/:id"
          render={(props) => (
            <AssignJob
              {...props}
              drivers={this.state.drivers}
              updateDriverList={this._getDrivers}
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

}

export default App;
