import React from 'react';

function Driver({data}) {

    return (
        <tr>
            <td>{data.last_name}</td>
            <td>{data.assigned_job ? data.assigned_job : 'none'}</td>

        </tr>
    )


}



export default Driver;