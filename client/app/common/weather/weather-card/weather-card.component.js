import template from './weather-card.html';
import controller from './weather-card.controller';

let WeatherCardComponent = {
	bindings: {
		location : '<'
	},
	template,
	controller
}

export default WeatherCardComponent;