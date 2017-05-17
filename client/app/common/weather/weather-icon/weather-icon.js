import angular from 'angular';
import weatherIconComponent from './weather-icon.component';
import './weather-icon.scss';

let WeatherIconModule = angular
	.module('weather.icon', [])
	.component('weatherIcon', weatherIconComponent)
	.name;

export default WeatherIconModule;