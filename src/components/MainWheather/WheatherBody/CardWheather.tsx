import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';

interface CardWheatherProps {
  nextDay: number;
}

const CardWheather: React.FC<CardWheatherProps> = ({ nextDay }) => {
  return (
    <Card p={4} alignItems="center" bgColor="white" boxShadow="md">
      <CardHeader></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardWheather;
