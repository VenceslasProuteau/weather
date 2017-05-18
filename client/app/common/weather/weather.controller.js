
class WeatherController {
  constructor(WeatherService, SpinnerService) {
  	"ngInject";
    this.WeatherService = WeatherService;
    this.SpinnerService = SpinnerService;
  }
  $onInit() {
  	this.locations = [];
    this.selectedLocation = null;
  }
  addLocation(query) {
    this.SpinnerService.show();
  	if (!query) { return; }
    return this.WeatherService.getWoeid(query)
      .then(response => this.WeatherService.getLocationData(response.woeid)
        .then(response => {
          // check if query already in locations
          const exist = this.locations.some(location => location.woeid === response.woeid);

          if (!exist) {
            this.locations = [response, ...this.locations];
          } else {
            const locationIndex = this.locations.findIndex(location => location.woeid === response.woeid);
            // else we update the location with fresh updated values
            this.locations = [...this.locations.slice(0, locationIndex), response, ...this.locations.slice(locationIndex + 1)];
          }
          this.setActive({location: response});
        })
      ).finally(() => this.SpinnerService.hide())
  }
  removeLocation({location}) {
  	if (!location.woeid) { return; }
    this.locations = this.locations.filter(({woeid}) => woeid !== location.woeid)
  }
  setActive({location}) {
    this.selectedLocation = Object.assign({}, location);
  }
}

export default WeatherController;
