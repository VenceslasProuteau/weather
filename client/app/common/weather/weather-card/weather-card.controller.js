class WeatherCardController {
	constructor(EventEmitter) {
		'ngInject';
		this.EventEmitter = EventEmitter;
	}
	$onInit() {
		this.pathIcon = `${this.pathIcons}${this.location.consolidated_weather[0].weather_state_abbr}.svg`;
		this.title = this.location.consolidated_weather[0].weather_state_name;
	}
	onRemove() {
		this.removeLocation(
			this.EventEmitter({id: this.location.woeid})
		)
	}
}

export default WeatherCardController;