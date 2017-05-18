import { DEGREE_UNITS } from './constants';

const filterDegreeVal = (value, degreeUnit) => {
	if (!DEGREE_UNITS.hasOwnProperty(degreeUnit)) {
		throw new Error('Wront weather unit');
	}
	return `${parseInt(value)}${DEGREE_UNITS[degreeUnit]}`;
}

const filterSpeedUnit = (value) => {
	return `${parseInt(value, 10)} mph`.toUpperCase();
}

const filterPercentage = (value) => {
	return `${value}%`;
}

const filterVisibility = (value) => {
	return `${parseInt(value, 10)} miles`;
}

const filterMbar = (value) => {
	return `${parseInt(value, 10)} mb`;
}

export { filterDegreeVal, filterSpeedUnit, filterPercentage, filterVisibility, filterMbar };