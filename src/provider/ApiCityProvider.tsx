import React from 'react'
import ApiCityContext from '../context/ApiCityContext'

const ApiCityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const api = `https://api.openweathermap.org/data/2.5/`;

  return (
    <ApiCityContext.Provider value={{
        api
    }}>
        {children}
    </ApiCityContext.Provider>
  )
}

export default ApiCityProvider;