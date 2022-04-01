/** @format */

import { Button } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Countries: FC = () => {
	const [countriesData, setCountriesData] = useState<Record<string, any>[]>();
	const [countryLoading, setCountryLoading] = useState<boolean>(true);
	const [countryError, setCountryError] = useState<boolean>(false);

	const location = useLocation();

	useEffect(() => {
		getCountryData();
	}, []);

	function getCountryData() {
		setCountryLoading(true);
		axios //@ts-ignore
			.get(`https://restcountries.com/v3.1/name/${location?.state?.country}`)
			.then((res) => setCountriesData(res.data))
			.catch(() => setCountryError(true))
			.finally(() => setCountryLoading(false));
	}
	console.log(countriesData?.length);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				height: window.innerHeight,
				padding: 10,
			}}
		>
			<div>
				{countryLoading ? (
					<div>Loading...</div>
				) : countryError ? (
					<div>Something Went wrong!</div>
				) : (
					countriesData?.map((country) => {
						return (
							<div
								style={{
									minWidth: window.innerWidth * 0.4,
									margin: 10,
									padding: 20,
									borderRadius: 20,
									boxShadow: "0px 0px 10px rgba(0,0,0,.5)",
									alignItems: "center",
									flexDirection: "column",
									display: "flex",
								}}
							>
								<div
									style={{
										flexDirection: "row",
										justifyContent: "space-around",
										alignItems: "center",
										display: "flex",
									}}
								>
									<div style={{ margin: 10 }}>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Name {"       "} : <h3> {country?.name?.common}</h3>
										</p>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Capital {"     "}:{" "}
											<h3>
												{"  "} {country?.capital?.[0]}
											</h3>
										</p>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Population {"  "}: <h3>{country?.population}</h3>
										</p>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Latitude {"    "}: <h3>{country?.latlng?.[0]}</h3>
										</p>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Longitude {"   "}: <h3>{country?.latlng?.[1]}</h3>
										</p>
										<p
											style={{
												flexDirection: "row",
												alignItems: "center",
												display: "flex",
												height: 15,
											}}
										>
											Image URL {"   "}: <h3>{country?.flags?.svg}</h3>
										</p>
									</div>
									<img
										src={country?.flags?.svg}
										alt={`${country.name?.common} flag ${country.flags[0]}`}
										width={100}
										height={100}
										style={{ width: 150, height: 100 }}
									/>
								</div>
								<Button
									style={{
										color: "white",
										borderRadius: 10,

										backgroundColor: "blue",
										padding: 10,
									}}
								>
									Capital Weather
								</Button>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Countries;
