import { InputGroup, Box, Input, InputRightAddon, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import useSearch from '../../hook/useSearch';

const SearchForecast: React.FC = () => {
  const { searchCity, cityValue, dataCity } = useSearch();

  return (
    <Box>
      <InputGroup size="lg">
        <Input ref={cityValue} type="text" placeholder="Digite o nome da cidade" bg="whitesmoke" />
        <InputRightAddon>
          <Button onClick={searchCity} size="lg" width="100%">Buscar</Button>
        </InputRightAddon>
      </InputGroup>

      <Heading>
        {dataCity?.name}
      </Heading>
    </Box>
  );
};

export default SearchForecast
