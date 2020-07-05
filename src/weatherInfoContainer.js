import React from 'react';
import './CSS/weatherInfoContainer.css';
import { ReactComponent as Thunderstorm } from './SVG/thunderstorm.svg';
import { ReactComponent as Rain } from './SVG/rain.svg';
import { ReactComponent as Snow } from './SVG/snow.svg';
import { ReactComponent as Clear } from './SVG/clear.svg';
import { ReactComponent as FewClouds } from './SVG/fewClouds.svg';
import { ReactComponent as Clouds } from './SVG/clouds.svg';
import { ReactComponent as OvercastClouds } from './SVG/OvercastClouds.svg';
import { ReactComponent as Barometer } from './SVG/barometer.svg';
import { ReactComponent as Humidity } from './SVG/humidity.svg';
import { ReactComponent as Wind } from './SVG/wind.svg';

const WeatherInfoContainer = (props) => {
     return (
         props.weather.map((weatherMaped, index) => {
            const sunrise = () => {
                let date = new Date(weatherMaped.sys.sunrise * 1000);
                let hours = date.getHours();
                let minutes = "0" + date.getMinutes();
                return hours + ":" + minutes.substr(-2);
            };

            const sunset = () => {
                let date = new Date(weatherMaped.sys.sunset * 1000);
                let hours = date.getHours();
                let minutes = "0" + date.getMinutes();
                return hours + ":" + minutes.substr(-2);
            };

            const rain = () => {
                if (weatherMaped.hasOwnProperty('rain')) {
                    let rainLevel = weatherMaped.rain['3h'];
                    return rainLevel + " mm";
                } else {
                    return "No rain";
                }
            };

             const snow = () => {
                 if (weatherMaped.hasOwnProperty('snow')) {
                     let snowLevel = weatherMaped.snow['3h'];
                     return snowLevel + " mm";
                 } else {
                     return "No snow";
                 }
             };

             let day = new Date();
             let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

             let conditionIcon = () => {
                 switch (weatherMaped.weather[0].id) {
                     case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
                        return <Thunderstorm />;

                     case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 314: case 321: case 500: case 501: case 502: case 503: case 504: case 511: case 520: case 521: case 522: case 531:
                         return <Rain />;

                     case 600: case 601: case 602: case 611: case 612: case 613: case 615: case 616: case 620: case 621: case 622:
                        return <Snow />;

                     case 800:
                         return <Clear />;

                     case 801:
                         return <FewClouds />;

                     case 802: case 803:
                        return <Clouds />;

                     case 804:
                         return <OvercastClouds />;
                 }
             }


            return (
                <div className="weatherInfoContainer">
                    <div className="weatherInfoContainer--header">
                        <h1 className="weatherInfoContainer--header__cityName">{weatherMaped.name}</h1>
                        <h1 className="weatherInfoContainer--header__temperature">{weatherMaped.main.temp} ℃</h1>
                    </div>
                    <div className="weatherInfoContainer--body">
                        <div className="weatherInfoContainer--leftBlock">
                            <h2>{days[day.getDay()]}</h2>
                            <div className="weatherInfoContainer--leftBlock__line">
                                <Humidity className="icon"/>
                                <p className="weatherInfoContainer--leftBlock__info">{weatherMaped.main.humidity} %</p>
                            </div>
                            <div className="weatherInfoContainer--leftBlock__line">
                                <Wind className="icon"/>
                                <p className="weatherInfoContainer--leftBlock__info">{weatherMaped.wind.deg}°, {weatherMaped.wind.speed} km/h</p>
                            </div>
                            <div className="weatherInfoContainer--leftBlock__line">
                                <Barometer className="icon"/>
                                <p className="weatherInfoContainer--leftBlock__info">{weatherMaped.main.pressure} hPa</p>
                            </div>
                        </div>
                        {conditionIcon()}
                    </div>

                    {/*<h1>{weatherMaped.name}</h1>*/}
                    {/*<p>*/}
                        {/*<span>Temperature: </span>*/}
                        {/*<span>{weatherMaped.main.temp}</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Wind speed: </span>*/}
                        {/*<span>{weatherMaped.wind.speed}</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Cloudiness: </span>*/}
                        {/*<span>{weatherMaped.clouds.all} %</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Sunrize: </span>*/}
                        {/*<span>{sunrise()}</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Sunset: </span>*/}
                        {/*<span>{sunset()}</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Rain: </span>*/}
                        {/*<span>{rain()}</span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                        {/*<span>Snow: </span>*/}
                        {/*<span>{snow()}</span>*/}
                    {/*</p>*/}
                </div>
            )
        })
     )
}

export default WeatherInfoContainer
