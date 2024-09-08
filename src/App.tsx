import { useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Header from './components/Header';
import SearchForecast from './components/SearchForecast';
import ContainerWheather from './components/MainWheather/ContainerWheather';
import WheatherHeader from './components/MainWheather/WheatherHeader';
import WheatherBody from './components/MainWheather/WheatherBody';
import useSearch from './hook/useSearch';

function App() {
  const { dataCity } = useSearch();
  return (
    <Box bg="blue.400" height="100vh" width="100%">
      <Flex alignItems="center" justifyContent="center" py={20}>
        <Stack spacing="20px">
          <Header />
          <SearchForecast />

          {dataCity && (
            <ContainerWheather
              childrenHeader={<WheatherHeader />}
              childrenBody={<WheatherBody />}
            />
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
