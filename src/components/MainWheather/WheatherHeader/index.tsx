import React from 'react'
import { DataCityTypes } from '../../../types/DataCityTypes'
import { Flex, Stack, Heading, Text, Box, Skeleton } from '@chakra-ui/react';

interface WheatherHeaderProps {
  dataCity: DataCityTypes
}

const WheatherHeader: React.FC<WheatherHeaderProps> = ({ dataCity }) => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
     <Stack width="100%" alignItems="center" spacing="16px">
      <Skeleton isLoaded={!!dataCity?.name}>
        <Heading>
          {dataCity.name}
        </Heading>
        </Skeleton>
        <Box>

        </Box>
        <Skeleton isLoaded={!!dataCity.weather}>
        <Text>
          {dataCity.weather.map((item) => (
            item.decription
          ))}
        </Text>
        </Skeleton>
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Text>Sensação térmica: </Text>
          <Text>Umidade: </Text>
          <Text>Pressão: </Text>
        </Flex>
     </Stack>
    </Flex>
  )
}

export default WheatherHeader