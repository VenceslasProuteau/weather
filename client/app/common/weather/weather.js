import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';
import { WeatherService } from './weather.service';

let weatherModule = angular.module('weather', [
  uiRouter
])

.component('weather', weatherComponent)
.service('WeatherService', WeatherService)
.name;

export default weatherModule;
