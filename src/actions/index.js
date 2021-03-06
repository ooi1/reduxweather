import axios from 'axios';

const API_KEY = '129f5655bfcda6fca8db2b0e5103e7ae';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  //console.log('Request',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
