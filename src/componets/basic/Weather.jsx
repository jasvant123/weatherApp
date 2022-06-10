import React, { useState,  useEffect } from 'react'
import "./App.css";
import Main from '../Main';
const Weather = () => {
  const[searchValue , setsearchValue ]=useState("Mumbai")
  const[weatherValue, setweatherValue]=useState({})
  const getWeatherinfo = async () => {
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b6a9fa02204cc758b0786fe5297b1e53`

        let res = await fetch(url);
        let data = await res.json();
        const {temp,humidity,pressure}=data.main;
        const {main:weathermood} = data.weather[0];
        const{name}=data;
        const{speed}=data.wind;
        const{country,sunset}=data.sys;
        const myweatherValue={
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
        setweatherValue(myweatherValue);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getWeatherinfo();
  },[]);
  return (
    <>
      <div className="searchbar">
        <div className="search">
          <input type="search" placeholder="Search.."
          autoFocus id='search' className='searchItem' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} 
          />
          <button type="submit" onClick ={getWeatherinfo}>Search</button>
        </div>
      </div>
      <Main weatherValue={weatherValue}/>
    </>
  )
}

export default Weather