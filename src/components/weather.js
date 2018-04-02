import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div className="weather">
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
            </div>
        );
    }
}

export default Weather;