import React from 'react';
import Driver from './Driver';
import axios from 'axios';
import Job from './Job';

class DriverList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            drivers: null,
            job: null
        }
    }

    render() {
        console.log('THIS IS DRIVER LIST RE-RENDERING');
        console.log(this.props.drivers);
        console.log(this.state.drivers);
        return (
            <div>
                <h2>Active Jobs</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Assigned Job</th>
                            <th>Driver Name</th>
                            <th>Mark Complete</th>
                        </tr>
                        {
                            this.props.drivers 
                            ? this.props.drivers.map(d => <Driver data={d} onClick={this._getJobInfo} getDrivers={this.props.onLoad} completed={this.props.completed}/>) 
                            : null
                        }
                    </tbody>
                </table>
                
                {
                    this.state.job
                    ?
                    <div>
                        <h2 style={{marginTop: '100px'}}>Additional Job Info</h2>
                        <table>
                            <tbody>

                                <tr>
                                    <th>Job ID</th>
                                    <th>Delivery Address</th>
                                    <th>Driving Distance (miles)</th>
                                </tr>
                                {
                                    this.state.job
                                    ? <Job data={this.state.job} />
                                    : null
                                }

                            </tbody>


                        </table>


                    </div>
                    : null
                }



            </div>

        )
    }

    _getJobInfo = async (id) => {
        console.log(id);

        // need to pass ID along in an axios post request to the backend, then print a Job component to the Active Jobs page
        const response = await axios.get(`http://localhost:5000/jobs/assigned/${id}`);
        console.log(response);
        this.setState({
            job: response.data
        })

    }


}




export default DriverList;