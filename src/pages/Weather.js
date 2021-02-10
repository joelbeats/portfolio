import { useState, useEffect } from 'react'
import styled from 'styled-components'

const WeatherBody = styled.div`
width: 100vw;
height: 100vh;
margin: 0px auto;
background-color: gray;
color: white;
`
const WeatherDiv = styled.div`
width: 300px;
margin: 0px auto;
`

const StyledP = styled.p`
padding: 20px;
text-align: center;
color: white;
line-height: 20px;
letter-spacing: 1px;
`

const Heading = styled.h1`
text-align: center;
padding-top: 70px;
text-shadow: 1px 2px black;
`

//Link : http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=8d840b905b1e4f4adce75a783c792709&units=metric
const apiKey = '8d840b905b1e4f4adce75a783c792709';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=' + apiKey + '&units=metric';


const Weather = () => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    console.log("hej")
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
      })
  }, []);


  return (
    <WeatherBody>
      <WeatherDiv>
      <Heading>Väder</Heading>
      <StyledP>Det blåser {weather && weather.wind.speed} m/s. <br />Temperaturen är {weather && weather.main.temp} &#8451; men det känns som: {weather && weather.main.feels_like.toFixed(1)} &#8451; i {weather && weather.name}.</StyledP>
      </WeatherDiv>
    </WeatherBody>
  )
}

export default Weather;