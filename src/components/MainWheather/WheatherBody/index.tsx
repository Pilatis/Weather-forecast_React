import React from 'react'
import { Flex } from '@chakra-ui/react'
import useSearch from '../../../hook/useSearch'

const WheatherBody: React.FC = () => {
  const { dataCity } = useSearch();
  return (
    <Flex padding="6px">
      {dataCity?.base}
    </Flex>
  )
}

export default WheatherBody