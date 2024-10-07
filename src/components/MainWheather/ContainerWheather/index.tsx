import React from 'react'
import { Box, Flex, Stack } from '@chakra-ui/react'

interface ContainerWheatherProps {
  childrenHeader: React.ReactNode;
  childrenBody: React.ReactNode;
}

const ContainerWheather: React.FC<ContainerWheatherProps> = ({ childrenHeader, childrenBody }) => {
  const childrenMain = [
    childrenHeader,
    childrenBody
  ];

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt={20}
    >
      <Stack width="100%" maxW="1000px" spacing="12px" direction="column">
        {childrenMain.map((children: React.ReactNode, index: number) => (
          <Box
            key={index}
            width="100%"
            padding="10px"
            bgColor="white"
            borderRadius="12px"
            shadow="lg"
          >
            {children}
          </Box>
        ))}''
      </Stack>
    </Flex>
  );
}

export default ContainerWheather