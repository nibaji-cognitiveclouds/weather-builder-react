/** @format */

export type countryType = {
	name: {
		common: string;
	};
	population: number;
	capital: string[];
	flags: {
		svg: string;
	};
	latlng: number[];
};

export type weatherType = {
	current: {
		temperature: number;
		wind_speed: number;
		precip: number;
		weather_icons: string[];
	};
};
