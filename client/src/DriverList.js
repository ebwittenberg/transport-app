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
                <h2>Drivers</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Driver Name</th>
                            <th>Assigned Job</th>
                        </tr>
                        {
                            this.props.drivers ? this.props.drivers.map(d => <Driver data={d}/>) : null
                        }
                    </tbody>
                </table>

            </div>

        )
    }


}




export default DriverList;