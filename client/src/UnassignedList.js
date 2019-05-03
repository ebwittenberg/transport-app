import React from 'react';
import Job from './Job';


function UnassignedList({jobs}) {
        return (
            <div>

                <h2>Unassigned Jobs</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Job ID</th>
                            <th>Delivery Address</th>
                            <th>Driving Distance (miles)</th>
                            <th>Assign Job</th>
                        </tr>
                        {
                            jobs ? jobs.map(j => <Job key={j.id} data={j}/>) : null
                        }
                    </tbody>
                </table>


            </div>

        )
    }




export default UnassignedList;