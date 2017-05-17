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
      .then(response => this.WeatherService.getLocationData(response.woeid)
        .then(response => {
          // check if query already in locations
          const exist = this.locations.some(location => location.woeid === response.woeid);
          // if it doesnt exist we push it
          if (!exist) {
            this.locations.push(response);
          } else {
            // else we update the location with fresh updated values
            const locationIndex = this.locations.findIndex(location => location.woeid === response.woeid);
            this.locations.splice(locationIndex, 1, response);
          }
        })
      )
  }

  removeLocation({id}) {
  	if (!id) { return; }
  	const index = this.locations.findIndex(location => location.woeid === id);
  	this.locations.splice(index, 1);
  }
}

export default WeatherController;
