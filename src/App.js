import React, { Component } from 'react'
import './App.css';
import "weather-icons/css/weather-icons.css"
import Weather from "./components/Weather"
import Form from "./components/Form"

const API_key = "46eb4db92d7c2edc75f8cad3d3c71b50";

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp_min: undefined,
    temp_max: undefined,
    description: undefined,
    celsius: undefined,
    icon: undefined,
    error: false,


  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm })
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle })
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain })
        break;
      case rangeId >= 600 && rangeId < 622:
        this.setState({ icon: this.weatherIcon.Snow })
        break;
      case rangeId >= 701 && rangeId < 781:
        this.setState({ icon: this.weatherIcon.Atmosphere })
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear })
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds })
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds })

    }
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if (city && country) {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_key}`)
      const response = await api_call.json()

      this.setState({
        city: response.name,
        country: response.sys.country,
        temperature: Math.floor(response.main.temp),
        temp_min: Math.floor(response.main.temp_min),
        temp_max: Math.floor(response.main.temp_max),
        description: response.weather[0].description,
        error: false
      })

      this.weatherIcon = {
        Thunderstorm: "wi-thunderstrom",
        Drizzle: "wi-sleet",
        Snow: 'wi-snow',
        Rain: "wi-storm-showers",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
      }

      // setting icons
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)


      console.log(response);
    } else {
      this.setState({ error: true })
    }
  }

  render() {
    return (
      <div>
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
          weatherIcon={this.state.icon} />
      </div>
    )
  }
}




export default App;












// const API_key = "46eb4db92d7c2edc75f8cad3d3c71b50";

// class App extends Component {
//   constructor() {
//     super()
//     this.getWeather();
//   }
//   state = {
//     city: undefined,
//     temperature: undefined,
//     icon: undefined,
//     temp_min: undefined,
//     temp_max: undefined,
//     description: undefined,
//     humidity: undefined,
//     wind_speed: undefined,
//     pressure: undefined,
//     cloudiness: undefined
//   }

//   getWeather = async () => {
//     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=${API_key}`)
//     const response = await api_call.json()
//     console.log(response);

//     this.setState({
//       city: response.name,
//       temperature: Math.floor(response.main.temp),
//       temp_min: Math.floor(response.main.temp_min),
//       temp_max: Math.floor(response.main.temp_max),
//       description: response.weather[0].description,
//       humidity: response.main.humidity,
//       pressure: response.main.pressure,
//       wind_speed: response.wind.speed,
//       cloudiness: response.clouds.all
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <CitySearch />
//         <WeaherDetails
//           city={this.state.city}
//           temperature={this.state.temperature}
//           temp_min={this.state.temp_min}
//           temp_max={this.state.temp_max}
//           description={this.state.description}
//           humidity={this.state.humidity}
//           wind_speed={this.state.wind_speed}
//           pressure={this.state.pressure}
//           cloudiness={this.state.cloudiness} />
//         <Footer />
//       </div>
//     )
//   }
// }

// export default App;