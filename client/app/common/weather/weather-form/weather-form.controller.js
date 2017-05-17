class WeatherFormController {
	constructor(EventEmitter) {
		'ngInject';
		this.EventEmitter = EventEmitter;
	}
	onSubmit() {
		if (!this.query) { return; }
		this.addLocation(
			this.EventEmitter(this.query)
		)
	}
}

export default WeatherFormController;