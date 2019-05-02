import React from 'react';
import axios from 'axios';
import Job from './Job';

class JobList extends React.Component {

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
                        this.props.jobs ? this.props.jobs.map(j => <Job data={j}/>) : null
                    }
                </tbody>
            </table>

        )
    }


}



export default JobList;