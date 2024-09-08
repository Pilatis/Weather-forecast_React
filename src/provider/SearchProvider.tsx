import React, { useCallback, useRef, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import SearchContext from '../context/SearchContext';
import useApiCity from '../hook/useApiCity';
import axios from 'axios';
import { DataCityTypes } from '../types/DataCityTypes';

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const keyWeather = 'c7bea731ab9e74b757a129c36a0acf79';
  const { api } = useApiCity();

  const toast = useToast();
  const [isError, setIsError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [dataCity, setDataCity] = useState<DataCityTypes | undefined>(
    undefined
  );

  const searchCity = useCallback(async (): Promise<
    DataCityTypes | undefined
  > => {
    const cityValue = inputRef?.current?.value;

    if (!cityValue) {
      toast({
        title: 'Atenção!',
        description: 'Por favor! Busca alguma cidade.',
        status: 'warning',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `${api}/weather?q=${cityValue}&appid=${keyWeather}`
      );
      if (response.status === 200) {
        setDataCity(response.data);

        toast({
          title: 'Sucesso!',
          description: 'Busca realizada com sucesso.',
          status: 'success',
          duration: 5000
        });

        return response.data as DataCityTypes;
      }
    } catch (error) {
      console.error(error);
      setIsError(true);

      toast({
        title: 'Ops!',
        description:
          'Não conseguimos encontrar a cidade buscada. Por favor tente outra.',
        status: 'error',
        duration: 5000,
        isClosable: true
      });

      setTimeout(() => {
        setIsError(false);
      }, 1000);
    } finally {
      setLoading(false);
    }
  }, [api]);

  return (
    <SearchContext.Provider
      value={{
        searchCity,
        cityValue: inputRef,
        keyWeather,
        loading,
        dataCity,
        isError
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
