import React from 'react';
import Job from './Job';

class CompletedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <table>
                <tbody>
                    <tr>
                        <th>Job ID</th>
                        <th>Delivery Address</th>
                        <th>Driving Distance</th>
                    </tr>
                    {
                        this.props.completed 
                        ? this.props.completed.map(j => <Job key={j.id} data={j} />)
                        : null
                    }
                </tbody>



            </table>

        )


    }


}




export default CompletedList;