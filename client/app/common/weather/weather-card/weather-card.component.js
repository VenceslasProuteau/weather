import template from './weather-card.html';
import controller from './weather-card.controller';

let WeatherCardComponent = {
	bindings: {
		location : '<',
		pathIcons: '<',
		removeLocation: '&'
	},
	template,
	controller
}

export default WeatherCardComponent;