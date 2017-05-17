import angular from 'angular';
import weatherFormComponent from './weather-form.component';
import './weather-form.scss';

let WeatherFormModule = angular
	.module('weather.form', [])
	.component('weatherForm', weatherFormComponent)
	.value('EventEmitter', payload => ({ $event: payload }))
	.name;

export default WeatherFormModule;