import React from 'react';

function Driver({data}) {

    return (
        <tr>
            <td>{data.assigned_job ? data.assigned_job : 'none'}</td>
            <td>{data.last_name}</td>

        </tr>
    )


}



export default Driver;