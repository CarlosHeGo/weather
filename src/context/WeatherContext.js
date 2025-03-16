import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    
      useEffect(() => {
        const fetchCities = async() => {
          const response = await fetch('/weather.json');
          const data = await response.json();
          setCities(data.ciudades);
          setSelectedCity(data.ciudades[0]);
        }
        fetchCities();
      }, []);

      return(
        <WeatherContext.Provider value={{cities, selectedCity, setSelectedCity}}>
            {children}
        </WeatherContext.Provider>
      )
}