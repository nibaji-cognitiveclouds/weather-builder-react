import { Container, Card, Modal, Box, TableRow, TableCell, Button, CircularProgress, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import axios from "axios"
import { useLocation } from "react-router-dom";

import { styles } from "../styles/screen";
import {countryDataType, weatherDataType} from "../types/responses"

const Countries : FC = ()=>{

    const location = useLocation() as any
    const {country} = location.state

    const [countryData, setCountrydata] = useState<countryDataType>()
    const [countryLoading, setCountryLoading] = useState<boolean>(false)
    const [countryError, setCountryError] = useState<boolean>(false)

    const [showWeatherModal, setShowWeatherModal] = useState<boolean>(false);
    const [weatherData, setWeatherData] = useState<weatherDataType>()
    const [weatherLoading, setWeatherLoading] = useState<boolean>(false)
    const [weatherError, setWeatherError] = useState<boolean>(false)

    useEffect(()=>{
      !countryLoading &&  getCountryData()
    },[])

    const getCountryData =()=> {
        setCountryLoading(true)
        axios.get(`https://restcountries.com/v3.1/name/${country}`)
        .then(res=> setCountrydata(res.data?.[0]))
        .catch(()=> setCountryError(true))
        .finally(()=> setCountryLoading(false))
    }

    const getWeatherData =(capital: string | undefined)=> {
        setWeatherLoading(true)
        axios.get(`http://api.weatherstack.com/current?access_key=e41fe21e9b5ae2b3809e23b6577e73ba&query=${capital}`)
        .then(res=> setWeatherData(res.data?.current))
        .catch(()=> setWeatherError(true))
        .finally(()=> setWeatherLoading(false))
    }

    return <>
        <Container>
            <Modal
                data-testid={"weatherModal"}
                open={showWeatherModal}
                onClose={()=>setShowWeatherModal(false)}
            >
                {
                    weatherLoading ? <CircularProgress 
                                        data-testid={"weatherLoader"}
                                        style={styles.weatherLoader}
                                    />  
                        : weatherError ? <Typography
                                            data-testid={"weatherError"}
                                            style={styles.weatherErro}
                                        >
                                        Try Again!
                                        </Typography>
                    : <Box 
                        data-testid={"weatherData"}
                        style={styles.weatherBox}
                    >
                        <img
                            src={weatherData?.weather_icons?.[0]}
                            alt="weatherIcon"
                            style={styles.weatherIcon}
                        />
    
                        <>
                            <TableRow>
                                <TableCell>
                                    Temperature
                                </TableCell>
                                <TableCell>
                                    :
                                </TableCell>
                                <TableCell>
                                    {weatherData?.temperature} °C
                                </TableCell>
                            </TableRow>
    
                            <TableRow>
                            <TableCell>
                                Wind Speed
                            </TableCell>
                            <TableCell>
                                :
                            </TableCell>
                            <TableCell>
                                {weatherData?.wind_speed} km/h
                            </TableCell>
                        </TableRow>
    
                        <TableRow>
                            <TableCell>
                                Precipitation
                            </TableCell>
                            <TableCell>
                                :
                            </TableCell>
                            <TableCell>
                                {weatherData?.precip} %
                            </TableCell>
                        </TableRow>
                        
                        </>
    
                        <Button
                            data-testid={"okBtn"}
                            onClick={()=>{
                                setShowWeatherModal(false)
                            }}
                            style={{ marginTop:10}}
                        >
                            Ok
                        </Button>
                    </Box>
                }
            </Modal>

            {
                countryLoading ? <CircularProgress 
                                    data-testid={"countryLoader"}
                                    style={styles.countryLoader}
                                />  
                    : countryError ? <Typography
                                        data-testid={"countryError"}
                                        style={styles.countryError}
                                    >
                                    Try Again!
                                    </Typography>
                : 
                <Card 
                    data-testid={"countryData"}
                    style={styles.countryCard}
                >

                <img
                    src={countryData?.flags?.["svg"]}
                    alt={"flag"}
                    style={styles.countryImg}
                />

                <>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            :
                        </TableCell>
                        <TableCell>
                            {countryData?.name?.["official"]}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Capital
                        </TableCell>
                        <TableCell>
                            :
                        </TableCell>
                        <TableCell>
                            {countryData?.capital?.[0]}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Population
                        </TableCell>
                        <TableCell>
                            :
                        </TableCell>
                        <TableCell>
                            {countryData?.population}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            Latitude/Longitude
                        </TableCell>
                        <TableCell>
                            :
                        </TableCell>
                        <TableCell>
                            {countryData?.latlng?.[0]}
                            {" / "}
                            {countryData?.latlng?.[1]}
                        </TableCell>
                    </TableRow>
                </>

                <Button
                    data-testid={"weatherBtn"}
                    style={styles.weatherBtn}
                    onClick={()=>{
                        setShowWeatherModal(true)
                        getWeatherData(countryData?.capital?.[0])
                    }}
                >
                    Capital Weather
                </Button>
            </Card>}
        </Container>
    </>
}

export default Countries
