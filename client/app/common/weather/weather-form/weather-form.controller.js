class WeatherFormController {
	constructor(EventEmitter) {
		'ngInject';
		this.EventEmitter = EventEmitter;
	}
	$onInit() {
		this.query = '';
		this.displayInput = false;
	}
	onSubmit() {
		if (!this.query) { return; }
		this.addLocation(
			this.EventEmitter(this.query)
		)
		this.query = '';
	}
}

export default WeatherFormController;