import React, { useRef } from 'react'
import SearchContext from '../context/SearchContext'

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = useRef();
  const keyWeather = "c7bea731ab9e74b757a129c36a0acf79";
  const cityValue = inputRef?.current?.value

  const searchCity = () => {

  }
  return (
    <SearchContext.Provider value={{
      searchCity,
      cityValue,
      keyWeather
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider