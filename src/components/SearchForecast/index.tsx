import { InputGroup, Box, Input, InputRightAddon, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import useSearch from '../../hook/useSearch';
import useAnimation from '../../hook/useAnimation';

const SearchForecast: React.FC = () => {
  const { searchCity, cityValue, dataCity, isError } = useSearch();
  const { shakeAnimation } = useAnimation();

  return (
    <Box>
      <InputGroup size="lg">
        <Input
          ref={cityValue}
          type="text"
          placeholder="Digite o nome da cidade"
          bg="whitesmoke"
          transition="700ms ease"
          animation={isError ? `${shakeAnimation} 0.3s ease-in-out` : ''}
          borderColor={isError ? 'red.500' : 'bleu.500'}
          errorBorderColor={isError ? 'red' : ''}
        />
        <InputRightAddon bgColor="green" border="none" padding="0">
          <Button onClick={searchCity} colorScheme="green" size="lg" width="100%">
            Buscar
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default SearchForecast
