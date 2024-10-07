import React from 'react';
import { Flex, Heading, Grid, Stack, GridItem } from '@chakra-ui/react';
import { DataCityTypes } from '../../../types/DataCityTypes';

interface WheatherBodyProps {
  dataCity: DataCityTypes;
}

const WheatherBody: React.FC<WheatherBodyProps> = ({ dataCity }) => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center">
      <Stack width="100%" alignItems="center" spacing="15px">
      <Heading fontWeight="600">
        Previsão para os próximos {dataCity?.base} dias
      </Heading>
      <Grid
        width="100%"
        templateColumns={{
          base: 'repeat(1, 2fr)',
          md: 'repeat(2, 2fr)',
          lg: 'repeat(5, 1fr)'
        }}
      >
        {/* EXAMPLE */}
      </Grid>
      </Stack>
    </Flex>
  );
};

export default WheatherBody;
