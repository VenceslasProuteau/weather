import template from './weather-form.html';
import controller from './weather-form.controller';

let WeatherFormComponent = {
	bindings: {
		addLocation : '&',
		query: '<'
	},
	template,
	controller
}

export default WeatherFormComponent;