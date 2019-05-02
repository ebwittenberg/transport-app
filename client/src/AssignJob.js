import React from 'react';

class AssignJob extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            selectedDriver: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Select driver to assign Job #{this.props.match.params.id}</h3>
                
                <form
                    action={`/jobs/assign/${this.props.match.params.id}`}
                    method="POST"
                    id="assignform"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this._submitForm(this.state.selectedDriver, this.props.match.params.id);
                    }}
                >
                    <select 
                        name="driverlist" 
                        form="assignform"
                        onChange={(e) => this.setState({selectedDriver: e.target.value})}
                    >
                        <option disabled selected>Select a driver</option>
                        {
                            this.props.drivers.map(driver => <option value={driver.last_name}>{driver.last_name}</option>)
                        }
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    _submitForm = (driver, jobID) => {

        console.log(driver);
        console.log(jobID);


    }





}


export default AssignJob;