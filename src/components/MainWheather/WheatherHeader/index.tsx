import React from 'react'
import { DataCityTypes } from '../../../types/DataCityTypes'
import { Flex, Stack, Heading, Text, Box } from '@chakra-ui/react';

interface WheatherHeaderProps {
  dataCity: DataCityTypes
}

const WheatherHeader: React.FC<WheatherHeaderProps> = ({ dataCity }) => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
     <Stack width="100%" alignItems="center" spacing="16px"> 
        <Heading>
          {dataCity.name}
        </Heading>
        <Box>

        </Box>
        <Text>
          {dataCity.weather.map((item) => (
            item.decription
          ))}
        </Text>
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