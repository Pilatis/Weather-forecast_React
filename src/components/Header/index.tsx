import React from 'react';
import { Flex, Heading } from '@chakra-ui/react'


const Header: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Heading color="white">Previsão do Tempo</Heading>
    </Flex>
  )
}

export default Header