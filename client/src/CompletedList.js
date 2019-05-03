import React from 'react';
import Job from './Job';

function CompletedList({completed}) {

    return (
        <div>

            <h2>Completed Jobs</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Delivery Address</th>
                        <th>Driving Distance</th>
                    </tr>
                    {
                        completed 
                        ? completed.map(j => <Job key={j.id} data={j} />)
                        : null
                    }
                </tbody>



            </table>


        </div>

    )
}




export default CompletedList;