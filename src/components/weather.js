import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div className="weather">
                {this.props.city && this.props.country && <p>location : {this.props.city},{this.props.country}</p>}
                {this.props.temperature && <p>temperature:{this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>description : {this.props.humidity}</p>}
            </div>
        );
    }
}
export default Weather;