import React from 'react';
import Job from './Job';


function UnassignedList({jobs}) {
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
                        jobs ? jobs.map(j => <Job key={j.id} data={j}/>) : null
                    }
                </tbody>
            </table>

        )
    }




export default UnassignedList;