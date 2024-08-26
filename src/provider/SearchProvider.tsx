import React, { useCallback, useRef, useState } from 'react'
import SearchContext from '../context/SearchContext'
import useApiCity from '../hook/useApiCity';
import axios from 'axios';
import { DataCityTypes } from '../types/DataCityTypes';

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const keyWeather = "c7bea731ab9e74b757a129c36a0acf79";
  const { api } = useApiCity();

  const [loading, setLoading] = useState<boolean>(false);
  const [dataCity, setDataCity] = useState<DataCityTypes | undefined>(undefined);

  const searchCity = useCallback(async (): Promise<DataCityTypes | undefined> => {
    const cityValue = inputRef?.current?.value;
    
    if (!cityValue) {
      console.error('City undefined')
      
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`${api}/weather?q=${cityValue}&appid=${keyWeather}`);
      setDataCity(response.data);
      console.log(response.data);
      return response.data as DataCityTypes;

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SearchContext.Provider value={{
      searchCity,
      cityValue: inputRef,
      keyWeather,
      loading,
      dataCity,
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider