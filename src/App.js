import React, {Component} from 'react';
import './App.css';
import mapedList from './cityList'
import WeatherInfoContainer from './weatherInfoContainer.js'
import CityChoiseForm from './form.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      loaded: false,
      city: mapedList,
      myCity: "",
    }
  }

  getWeather = async (e) => {
    console.log('before loading', this.state)
    e.preventDefault();
    try {
      let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.myCity + ',ua&units=metric&APPID=b40640de9322c8facb1fcb9830e8b1f4');
      let data = await response.json();
      console.log('data: ', data);
      this.setState({
        weather: [...this.state.weather, data],
        loaded: true
      }, () => console.log(this.state));
    } catch (e) {
      console.log(e);
    }
  }

  handleMyCityChange = (event, value) => {
    this.setState ({
        myCity: value,
        loaded: false
    }, () => console.log(this.state)
    )
  }

  render() {
    return (
        <div className="App">

            <CityChoiseForm
                getWeather={this.getWeather}
                city={this.state.city}
                handleMyCityChange={this.handleMyCityChange}
                cityCheck = {this.state.city}
            />

            <div className="weatherInfo">
              <WeatherInfoContainer
                  weather = {this.state.weather}
              />
          </div>
        </div>
    );
  }
}

export default App;
