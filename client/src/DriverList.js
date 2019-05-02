import React from 'react';
import Driver from './Driver';

class DriverList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            drivers: null
        }
    }

    render() {
        console.log(this.state.drivers);
        return (
            <div>
                <h2>Active Jobs</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Assigned Job</th>
                            <th>Driver Name</th>
                        </tr>
                        {
                            this.props.drivers 
                            ? this.props.drivers.filter(driver => driver.assigned_job).map(d => <Driver data={d}/>) 
                            : null
                        }
                    </tbody>
                </table>

            </div>

        )
    }


}




export default DriverList;