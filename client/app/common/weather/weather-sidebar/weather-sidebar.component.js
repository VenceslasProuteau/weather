import template from './weather-sidebar.html';
import controller from './weather-sidebar.controller';

let WeatherSidebarComponent = {
	bindings: {
		locations: '<',
		setActive: '&',
		searchLocation: '&',
		selectedLocationId: '<'
	},
	template,
	controller
}

export default WeatherSidebarComponent;