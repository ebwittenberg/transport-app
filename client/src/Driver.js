import React from 'react';

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
    
            </tr>
        )

    }

    _onMouseOver = () => {
        this.setState({
            hover: !this.state.hover
        })
    }


}



export default Driver;