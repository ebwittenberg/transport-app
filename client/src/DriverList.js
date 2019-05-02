import React from 'react';
import axios from 'axios';
import Driver from './Driver';

class DriverList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            drivers: null
        }
    }

    componentDidMount() {
        // call function that gets all drivers from backend
        this._getDrivers();
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
                            this.state.drivers ? this.state.drivers.map(d => <Driver data={d}/>) : null
                        }
                    </tbody>
                </table>

            </div>

        )
    }

    _getDrivers = async () => {
        // get drivers from the backend, save in state
        const response = await axios.get('http://localhost:5000/drivers');
        this.setState({
            drivers: response.data
        })

    }


}




export default DriverList;