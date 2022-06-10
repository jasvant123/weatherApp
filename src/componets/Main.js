import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import React from 'react';

const Main = ({weatherValue}) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = weatherValue;

  let sec = sunset;
  let date = new Date(sec*1000);
  let timetr = `${date.getHours()}:${date.getMinutes()}`;
  
  return (
    <>
     <div className="weathercard">
        <div className="weatherIcon">
          
          {weathermood==="smoke" &&<img src="./smoke.png" alt="smoke" />}
          {weathermood==="cloud" &&<img src="./cloud.png" alt="cloud" />}
          {weathermood==="clear" &&<img src="./clear.png" alt="clear" />}
          {weathermood==="rain" &&<img src="./rain.png" alt="rain" />}
        </div>
        <div className="weatherInfo">
          <div className="Temprature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weathercondition">{weathermood}</div>
            <div className="place">{name},{country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="Extra-temp">
          <div className="Extra-info">
            <div className="two-side-section">
              <p>
                <WbSunnyOutlinedIcon/>
              </p>
                <p className="Extra-info-leftside">
                  {timetr} {parseInt(date.getHours())>12?"PM":"AM"} <br />
                  sunset
                </p>
                <div className="side-section">
                <p>
                <ThermostatOutlinedIcon/>
              </p>
                <p className="Extra-info-leftside">
                    {humidity} <br />
                     Humidity
                </p>
                </div>
                <div className="side--section">
                <p>
                <WaterOutlinedIcon/>
              </p>
                <p className="Extra-info-leftside">
                    {pressure }<br />
                    Pressure
                </p>
                </div>
                <div className="side--section">
                <p>
                <AirOutlinedIcon />
              </p>
                <p className="Extra-info-leftside">
                  {speed} <br />
                  Speed
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main