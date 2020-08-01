import React, {Component} from 'react'
import Weather from './components/weather.compnent'
import Form from './components/form.component'

import './App.css';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const API_KEY = "693774e117d4caf90bd742a45dc4f475"


class App extends Component{

  constructor(){
    super()
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      desc: '',
      icon: undefined,
      error: false,
    }
    this.weatherIcons = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog'
    }
  }

  getWeatherIcon = (id) => {
    switch(true){
      case id >=200 && id <= 232:
        this.setState({icon: this.weatherIcons.Thunderstorm})
        break
      case id >=300 && id <= 321:
        this.setState({icon: this.weatherIcons.Drizzle})
        break
      case id >=500 && id <= 531:
        this.setState({icon: this.weatherIcons.Rain})
        break
      case id >=600 && id <= 622:
        this.setState({icon: this.weatherIcons.Snow})
        break
      case id >=701 && id <= 781:
        this.setState({icon: this.weatherIcons.Atmosphere})
        break
      case id === 800:
        this.setState({icon: this.weatherIcons.Clear})
        break
      case id >= 801 && id <= 804:
        this.setState({icon: this.weatherIcons.Clouds})
        break
      default:
        this.setState({icon: this.weatherIcons.Clouds})
    }
  }

  getWeather = async (e) => {
    e.preventDefault()

    let city = e.target.elements.city.value
    let country = e.target.elements.country.value

    if(city && country){
      let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      let api_call = await fetch(endpoint)
      let response = await api_call.json()

      this.setState({
        city: response.name,
        country: response.sys.country,
        temp: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        desc: response.weather[0].description,
        error: false,
      })

      this.getWeatherIcon(response.weather[0].id)
    }else{
      this.setState({
        error: true
      })
    }

  }

  calCelsius = (temp) => {
    return Math.floor(temp-273.15)
  }

  render(){
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather data={this.state} />
      </div>
    )
  }
}

export default App;
