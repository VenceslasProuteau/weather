class WeatherSidebarController {
	constructor(EventEmitter) {
		'ngInject';
		this.EventEmitter = EventEmitter;
	}
	$onInit() {

	}
	onClick({location}) {
		this.setActive(
			this.EventEmitter({location: location})
		)
	}
}

export default WeatherSidebarController;