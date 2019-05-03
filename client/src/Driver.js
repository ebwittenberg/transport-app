import React from 'react';
import axios from 'axios';
import qs from 'qs';

class Driver extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            hover: false,
        }
    }

    render() {

        let linkStyle;
        if (this.state.hover) {
            linkStyle = {
                backgroundColor: '#d9dbdd',
                cursor: 'pointer'
            }
        }

        return (
            <tr>
                <td
                onMouseEnter={this._onMouseOver}
                onMouseLeave={this._onMouseOver}
                style={linkStyle}
                onClick={(e) => this.props.onClick(e.target.textContent)}
                >
                {this.props.data.assigned_job ? this.props.data.assigned_job : 'none'}
                </td>
                <td>{this.props.data.last_name}</td>
                <td>
                    <button
                        onClick={() => {
                            this._markComplete();
                        }}
                    >
                    Mark complete
                    </button>
                </td>
    
            </tr>
        )

    }

    _onMouseOver = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    _markComplete = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:5000/jobs/complete',
            data: qs.stringify(
                {
                    message: this.props.data
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        this.props.getDrivers();
        this.props.completed();

    }


}



export default Driver;