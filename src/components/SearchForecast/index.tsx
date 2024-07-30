import { InputGroup, Box, Input, InputRightAddon, Button } from '@chakra-ui/react'
import React from 'react'
import useSearch from '../../hook/useSearch';
import useApiCity from '../../hook/useApiCity';
import axios from 'axios';

const SearchForecast: React.FC = () => {
  const { searchCity, cityValue } = useSearch();
  const { api } = useApiCity();

  const handleSearchLocal = (): void => {
    const data = axios.get(api)
  }//continuation...

  //exemple
  useEffect(() => {
    try {

    } catch (error) {

    } finally {
      
    }
  }, []);

  return (
    <Box>
      <InputGroup size="lg">
        <Input ref={cityValue} type="text" placeholder="Digite o nome da cidade" />
        <InputRightAddon>
          <Button onClick={searchCity} width="100%">Buscar</Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default SearchForecast
