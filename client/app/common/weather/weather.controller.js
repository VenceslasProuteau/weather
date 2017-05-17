import { ICON_BASEURL } from '../../constants';

class WeatherController {
  constructor(WeatherService) {
  	"ngInject";
    this.WeatherService = WeatherService;
  }
  $onInit() {
  	this.locations = [];
  	this.query = '';
  	this.pathIcons = ICON_BASEURL;
  }
  addLocation(query) {
  	if (!query) { return; }
  	return this.WeatherService.getWoeid(query)
  		.then(response =>
        this.WeatherService.getLocationData(response.woeid)
				  .then(response => this.locations.push(response))
  		)
  		
  }
  removeLocation({id}) {
  	if (!id) { return; }
  	let index = this.locations.findIndex(location => location.woeid === id);
  	this.locations.splice(index, 1);
  }
}

export default WeatherController;
