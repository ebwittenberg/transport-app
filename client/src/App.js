import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

import Home from './Home';
import DriverList from './DriverList';
import JobList from './JobList';

function App() {
  return (
    <div>
      <div className="nav">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/drivers">Drivers</Link></p>
        <p><Link to="/jobs">Jobs</Link></p>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/drivers" component={DriverList} />
      <Route path="/jobs" component={JobList} />
    </div>
  );
}

export default App;
