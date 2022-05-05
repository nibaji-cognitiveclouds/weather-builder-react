export type countryDataType ={
    name: {
        official: "string"
    },
    capital: string[]
    population: number
    latlng: number[]
    flags: {
        svg: string
    }
}

export type weatherDataType ={
    temperature: number
    weather_icons: string[]
    wind_speed: number
    precip: number
}