import angular from 'angular';
import weatherComponent from './weather.component';
import WeatherCardModule from './weather-card/weather-card';
import WeatherFormModule from './weather-form/weather-form';
import WeatherIconModule from './weather-icon/weather-icon';
import WeatherSidebarModule from './weather-sidebar/weather-sidebar';

import WeatherService from './weather.service';

let weatherModule = angular.module('weather', [
  WeatherCardModule,
  WeatherFormModule,
  WeatherIconModule,
  WeatherSidebarModule
])

.component('weather', weatherComponent)
.service('WeatherService', WeatherService)
.name;

export default weatherModule;
