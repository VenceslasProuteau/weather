import angular from 'angular';
import spinnerComponent from './spinner.component';
import SpinnerService from './spinner.service';

let spinnerModule = angular.module('spinner', [])

.component('spinner', spinnerComponent)
.service('SpinnerService', SpinnerService)
.name;

export default spinnerModule;
