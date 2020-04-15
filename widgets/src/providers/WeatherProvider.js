import React, { createContext, useReducer } from 'react'

export const WeatherContext = createContext();

const WeatherProvider = (props) => {
    const [weather, setWeather] = useState(WeatherReducer, [])

    return(
        <WeatherContext.Provider value={{weather,dispatch}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider