/** @format */

import {
	Box,
	Button,
	CardContent,
	CircularProgress,
	Container,
	Modal,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { muiStyles, styles } from "../styles/screens";

const Countries: FC = () => {
	const [countriesData, setCountriesData] = useState<Record<string, any>[]>();
	const [countryLoading, setCountryLoading] = useState<boolean>(true);
	const [countryError, setCountryError] = useState<boolean>(false);

	const [showModal, setShowModal] = useState<boolean>(false);
	const [weatherData, setWeatherData] = useState<Record<string, any>>();
	const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
	const [weatherError, setWeatherError] = useState<boolean>(false);

	const location = useLocation();

	useEffect(() => {
		getCountryData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function getCountryData() {
		setCountryLoading(true);
		axios //@ts-ignore
			.get(`https://restcountries.com/v3.1/name/${location?.state?.country}`)
			.then((res) => setCountriesData(res.data))
			.catch(() => setCountryError(true))
			.finally(() => setCountryLoading(false));
	}

	function getWeather(capital: string) {
		setWeatherLoading(true);
		setShowModal(true);
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=9cfe09f6522f28c80de18d51c2880bf4&query=${capital}`
			)
			.then((res) => setWeatherData(res.data))
			.catch(() => setWeatherError(true))
			.finally(() => setWeatherLoading(false));
	}

	return (
		<Container style={styles.container2}>
			<div style={{ margin: 20 }}>
				<Button style={styles.backBtn} onClick={() => window.history.back()}>
					{"< Back"}
				</Button>
			</div>

			<Modal open={showModal} onClose={() => setShowModal(false)}>
				<Box sx={muiStyles.modal}>
					{weatherLoading ? (
						<CircularProgress />
					) : weatherError ? (
						<Typography>Something went wrong!</Typography>
					) : (
						<Stack
							style={{
								alignItems: "center",
							}}
						>
							<Typography variant="h5">Weather</Typography>
							<img
								src={weatherData?.current?.weather_icons?.[0]}
								alt={"weather"}
								style={styles.img}
							/>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell>
											<Typography textAlign={"right"}>Temperature</Typography>
										</TableCell>
										<TableCell>:</TableCell>
										<TableCell>
											<Typography>
												{weatherData?.current?.temperature} °C
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography textAlign={"right"}>WindSpeed</Typography>
										</TableCell>
										<TableCell>:</TableCell>
										<TableCell>
											<Typography>
												{weatherData?.current?.wind_speed} km/hr
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography textAlign={"right"}>Precip</Typography>
										</TableCell>
										<TableCell>:</TableCell>
										<TableCell>
											<Typography>{weatherData?.current?.precip} %</Typography>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
							<Button onClick={() => setShowModal(false)} style={styles.okBtn}>
								Ok
							</Button>
						</Stack>
					)}
				</Box>
			</Modal>

			<Container style={styles.container2}>
				{countryLoading ? (
					<CircularProgress style={styles.progressAndError} />
				) : countryError ? (
					<Typography style={styles.progressAndError}>
						Something Went wrong. Go back and enter proper country name!
					</Typography>
				) : (
					countriesData?.map((country) => {
						return (
							<CardContent style={styles.card}>
								<Container
									style={{
										flexDirection: "row",
										justifyContent: "space-around",
										alignItems: "center",
										display: "flex",
										marginBottom: 15,
									}}
								>
									<Table sx={{ marginRight: 5 }}>
										<TableBody>
											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Name</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<Typography textAlign={"left"}>
														{country?.name?.common}
													</Typography>
												</TableCell>
											</TableRow>

											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Capital</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<Typography textAlign={"left"}>
														{country?.capital?.[0]}
													</Typography>
												</TableCell>
											</TableRow>

											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Population</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<Typography textAlign={"left"}>
														{country?.population}
													</Typography>
												</TableCell>
											</TableRow>

											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Latitude</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<Typography textAlign={"left"}>
														{country?.latlng?.[0]}
													</Typography>
												</TableCell>
											</TableRow>

											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Longitude</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<Typography textAlign={"left"}>
														{country?.latlng?.[1]}
													</Typography>
												</TableCell>
											</TableRow>

											<TableRow>
												<TableCell>
													<Typography textAlign={"left"}>Image URL</Typography>
												</TableCell>
												<TableCell>:</TableCell>
												<TableCell>
													<a href={country?.flags?.svg}>
														{country?.flags?.svg}
													</a>
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>

									<img
										src={country?.flags?.svg}
										alt={`${country.name?.common} flag ${country.flags[0]}`}
										width={200}
									/>
								</Container>
								<Button
									style={styles.weatherBtn}
									onClick={() => {
										getWeather(country?.capital?.[0]);
									}}
								>
									Capital Weather
								</Button>
							</CardContent>
						);
					})
				)}
			</Container>
		</Container>
	);
};

export default Countries;
