import React from 'react';
import { DataCityTypes } from '../../../types/DataCityTypes'
import { Flex, Stack, Heading, Text, Box, Skeleton, Image } from '@chakra-ui/react';
import useWeatherIcons from '../../../hook/useWeatherIcons';

interface WheatherHeaderProps {
  dataCity: DataCityTypes
}

const WheatherHeader: React.FC<WheatherHeaderProps> = ({ dataCity }) => {

  const { text, icon } = useWeatherIcons();

  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
     <Stack width="100%" alignItems="center" spacing="16px">
      <Skeleton isLoaded={!!dataCity?.name}>
        <Heading>
          {dataCity.name}
        </Heading>
        </Skeleton>
        <Stack alignItems="center" spacing="4px">
        <Box>
          <Image src={icon} width="100px" />
        </Box>
        <Text>
          {text}
        </Text>
        </Stack>
        <Flex width="100%" alignItems="center" justifyContent="space-between" mt={6}>
          <Text>Sensação térmica: {dataCity.main?.temp.toFixed(0)}</Text>
          <Text>Umidade: {dataCity.main?.humidity}</Text>
          <Text>Pressão: {dataCity.main?.pressure}</Text>
        </Flex>
     </Stack>
    </Flex>
  )
}

export default WheatherHeader