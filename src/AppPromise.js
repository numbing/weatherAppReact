import React, {Component} from 'react';
import './App.css';
import Form from './components/form';
import Title from './components/title';
import Weather from './components/weather';

const API_KEY = "e5ced403947117877134523bd0915d32\n";

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const upDate = this.updateState;
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then(function (apiCall) {
                return apiCall.json();
            }).then(function (data) {
            upDate(data, city, country);
        })
    };

    updateState = (data, city, country) => {
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""

            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "please enter name of city and country !"
            });
        }
    };

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Title/>
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
/*var url = [

]
var responses =[]
 url.forEach(function (url,i) {
     fetch(url).then(
         function (res) {
              responses[i] = res
             if (responses.length == ){
                 console.log(res)
             }
         }

     )*/


