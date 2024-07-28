import React from 'react'
import ApiCityContext from '../context/ApiCityContext'
import useSearch from '../hook/useSearch'

const ApiCityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { keyWeather, cityValue } = useSearch();
  
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${keyWeather}`;

  return (
    <ApiCityContext.Provider value={{
        api
    }}>
        {children}
    </ApiCityContext.Provider>
  )
}

export default ApiCityProvider