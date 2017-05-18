import angular from 'angular';
import WeatherModule from './weather/weather';
import SpinnerModule from './spinner/spinner';

let commonModule = angular.module('app.common', [
  WeatherModule,
  SpinnerModule
])
  
.name;

export default commonModule;
