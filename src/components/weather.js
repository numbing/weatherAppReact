import React, {Component} from 'react';

const Weather = props => (

        <div className="weather">
            {props.city && props.country && <p>location : {props.city},{props.country}</p>}
            {props.temperature && <p>temperature:{props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>description : {props.humidity}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
);



export default Weather;