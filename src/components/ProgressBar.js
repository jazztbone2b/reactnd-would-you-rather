import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        const { percent } = this.props;

        const containerStyles = {
            height: 20,
            width: '100%',
            backgroundColor: "#bdbdbd",
            borderRadius: 50,
            marginTop: 20
        }
        
        const fillerStyles = {
            height: '100%',
            width: `${percent}%`,
            backgroundColor: '#e53935',
            borderRadius: 'inherit',
            textAlign: 'right'
        }
        
        const labelStyles = {
            padding: 5,
            color: 'white',
            fontWeight: 'bold'
        }

        return (
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${percent}%`}</span>
                </div>
            </div>
        )
    }
}

export default ProgressBar;