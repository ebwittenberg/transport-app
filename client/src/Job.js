import React from 'react';
import {Link} from 'react-router-dom';


function Job({data}) {

    return (

        <tr>
            <td>{data.id}</td>
            <td>{data.delivery_address}</td>
            <td>{data.driving_distance}</td>

            {
                !data.assigned 
                ? <td><button><Link to={`/jobs/unassigned/${data.id}`}>Assign to Driver</Link></button></td> 
                : null
                
            }
        </tr>

    )


}


export default Job;