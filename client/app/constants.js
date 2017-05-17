export const API_BASEURL = 'http://www.metaweather.com/api/location/';
export const ICON_BASEURL = 'http://www.metaweather.com/static/img/weather/';

export const ABBRS = {
	sn: 'snow',
	sl: 'sleet',
	h: 'hail',
	t: 'thunderstorm',
	hr: 'heavy rain',
	lr: 'light rain',
	s: 'showers',
	hc: 'heavy cloud',
	lc: 'light cloud',
	c: 'clear'
};

export const API_CFG = {
	locationSearchQuery: `${API_BASEURL}search/?query=`,
	locationSearchLat: `${API_BASEURL}search/?lattlong=`
};