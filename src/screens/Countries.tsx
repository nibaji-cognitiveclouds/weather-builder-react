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
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { muiStyles, styles } from "../styles/screens";
import { countryType, weatherType } from "../types/responses";
import { LocationStateType } from "../types/router";
import { getCountryData, getWeather } from "../utils/apiCalls";

const Countries: FC = () => {
	const [countriesData, setCountriesData] = useState<countryType[]>();
	const [countryLoading, setCountryLoading] = useState<boolean>(true);
	const [countryError, setCountryError] = useState<boolean>(false);

	const [showModal, setShowModal] = useState<boolean>(false);
	const [weatherData, setWeatherData] = useState<weatherType>();
	const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
	const [weatherError, setWeatherError] = useState<boolean>(false);

	const location = useLocation();

	const { country } = location?.state as LocationStateType;

	useEffect(() => {
		setCountryLoading(true);
		getCountryData(country)
			.then((data) => setCountriesData(data))
			.catch(() => setCountryError(true))
			.finally(() => setCountryLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
						const { name, capital, population, latlng, flags } = country;
						return (
							<CardContent style={styles.card}>
								<img
									src={flags?.svg}
									alt={`${name?.common} flag ${flags?.svg}`}
									width={200}
								/>

								<Table sx={{ marginY: 5 }}>
									<TableBody>
										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Name</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography textAlign={"left"}>
													{name?.common}
												</Typography>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Capital</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography textAlign={"left"}>
													{capital?.[0]}
												</Typography>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Population</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography textAlign={"left"}>{population}</Typography>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Latitude</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography textAlign={"left"}>
													{latlng?.[0]}
												</Typography>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Longitude</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography textAlign={"left"}>
													{latlng?.[1]}
												</Typography>
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												<Typography textAlign={"right"}>Image URL</Typography>
											</TableCell>
											<TableCell>:</TableCell>
											<TableCell>
												<Typography
													onClick={() => {
														window.open(flags?.svg);
													}}
													textAlign={"left"}
													color="blue"
													style={styles.link}
												>
													{flags?.svg}
												</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>

								<Button
									style={styles.weatherBtn}
									onClick={() => {
										setWeatherLoading(true);
										setShowModal(true);
										getWeather(capital?.[0])
											.then((data) => {
												setWeatherData(data);
											})
											.catch(() => setWeatherError(true))
											.finally(() => setWeatherLoading(false));
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
