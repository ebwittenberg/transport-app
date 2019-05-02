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
        <Route path="/jobs/assign/:id" component={AssignJob} />
      </div>
    );
  }

  _getDrivers = async () => {
    // get drivers from the backend, save in state
    const response = await axios.get('http://localhost:5000/drivers');
    this.setState({
        drivers: response.data
    })

  }

}

export default App;
