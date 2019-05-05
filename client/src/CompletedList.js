import React from 'react';
import Job from './Job';

class CompletedList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCompleted();
    }

    render() {
        return (
            <div>
        
                <h2>Completed Jobs</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Job ID</th>
                            <th>Delivery Address</th>
                            <th>Driving Distance (miles)</th>
                        </tr>
                        {
                            this.props.completed 
                            ? this.props.completed.map(j => <Job key={j.id} data={j} />)
                            : null
                        }
                    </tbody>
        
        
        
                </table>
        
        
            </div>
        
        )
    }



}





export default CompletedList;