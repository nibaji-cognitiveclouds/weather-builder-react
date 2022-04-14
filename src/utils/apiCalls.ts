/** @format */

import axios from "axios";
import { countryType, weatherType } from "../types/responses";

export async function getCountryData(country: string): Promise<countryType[]> {
	const response = await axios //@ts-ignore
		.get(`https://restcountries.com/v3.1/name/${country}`);
	return response.data;
}

export async function getWeather(capital: string): Promise<weatherType> {
	const response = await axios.get(
		`http://api.weatherstack.com/current?access_key=9cfe09f6522f28c80de18d51c2880bf4&query=${capital}`
	);
	return response.data;
}
