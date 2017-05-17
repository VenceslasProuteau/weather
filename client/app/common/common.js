import angular from 'angular';
import Weather from './weather/weather';
import WeatherForm from './weather/weather-form/weather-form';
import WeatherCard from './weather/weather-card/weather-card';
import WeatherIcon from './weather/weather-icon/weather-icon';

let commonModule = angular.module('app.common', [
  Weather,
  WeatherForm,
  WeatherCard,
  WeatherIcon
])
  
.name;

export default commonModule;
