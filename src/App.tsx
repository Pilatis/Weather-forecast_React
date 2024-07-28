import { useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Header from './components/Header';
import SearchForecast from './components/SearchForecast';

function App() {
  return (
  <Box bg="blue.400" height="100vh" width="100%">
    <Flex alignItems="center" justifyContent="center" py={20}>
      <Stack spacing="20px">
      <Header />
      <SearchForecast />
      </Stack>
    </Flex>
  </Box>
);
}

export default App;
