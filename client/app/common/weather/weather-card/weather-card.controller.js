class WeatherCardController {
	constructor(EventEmitter) {
		'ngInject';
		this.EventEmitter = EventEmitter;
	}
	$onInit() {
		this.selectedDayObject = this.location.consolidated_weather[0];
		this.weekForecastArr = [...this.location.consolidated_weather.slice(1)];

	}
	$onChanges(data) {
		if (!data.location.isFirstChange()) {
			this.selectedDayObject = Object.assign({}, data.location.currentValue.consolidated_weather[0]);
			this.weekForecastArr = [...data.location.currentValue.consolidated_weather.slice(1)];
		}
	}
}

export default WeatherCardController;