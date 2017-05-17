import { API_CFG, API_BASEURL } from '../../constants';

export class WeatherService {
	constructor($http) {
		"ngInject";
		this.$http = $http;
	}
	getWoeid(query) {
		return this.$http.get(`${API_CFG.locationSearchQuery}${query}`)
			.then(response => response.data[0]);
	}
	getLocationData(woeid) {
		return this.$http.get(`${API_BASEURL}${woeid}/`)
			.then(response => response.data);
	}
}
