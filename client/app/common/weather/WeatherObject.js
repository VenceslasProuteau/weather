import moment from 'moment';
import { filterDegreeVal, filterSpeedUnit, filterPercentage, filterVisibility, filterMbar } from '../../utils';
import { ICON_BASEURL } from '../../constants';

export default class WeatherObject {
	constructor(data) {
		Object.assign(this, {
			temp: filterDegreeVal(data.the_temp, 'celsius'),
			maxTemp: filterDegreeVal(data.max_temp, 'celsius'),
			minTemp: filterDegreeVal(data.min_temp, 'celsius'),
			visibility: filterVisibility(data.visibility),
			humidity: filterPercentage(data.humidity),
			predictability: filterPercentage(data.predictability),
			windSpeed: filterSpeedUnit(data.wind_speed),
			windDirection: data.wind_direction_compass,
			windDirectionDegrees: data.wind_direction,
			airPressure: filterMbar(data.air_pressure),
			currentDay: moment(data.applicable_date).format('dddd'),
			iconPath: `${ICON_BASEURL}${data.weather_state_abbr}.svg`
		})
	}
}
