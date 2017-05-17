import angular from 'angular';
import weatherCardComponent from './weather-card.component';
import './weather-card.scss';

let WeatherCardModule = angular
	.module('weather.card', [])
	.component('weatherCard', weatherCardComponent)
	.value('EventEmitter', payload => ({ $event: payload }))
	.name;

export default WeatherCardModule;