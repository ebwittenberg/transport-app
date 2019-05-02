import React from 'react';
import axios from 'axios';
import Job from './Job';

class JobList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            jobs: null
        }
    }

    componentDidMount() {
        this._getAllJobs();
    }

    render() {
        return (

            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Delivery Address</th>
                        <th>Driving Distance</th>
                        <th>Assign Job</th>
                    </tr>
                    {
                        this.state.jobs ? this.state.jobs.map(j => <Job data={j}/>) : null
                    }
                </tbody>
            </table>

        )
    }

    _getAllJobs = async () => {
        const response = await axios.get('http://localhost:5000/jobs');
        this.setState({
            jobs: response.data
        })


    }


}



export default JobList;