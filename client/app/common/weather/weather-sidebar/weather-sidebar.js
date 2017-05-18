import angular from 'angular';
import weatherSidebarComponent from './weather-sidebar.component';
import './weather-sidebar.scss';

let WeatherSidebarModule = angular
	.module('weather.sidebar', [])
	.component('weatherSidebar', weatherSidebarComponent)
	.value('EventEmitter', payload => ({ $event: payload }))
	.name;

export default WeatherSidebarModule;