import {
  Box,
  Grid,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/core';
import React from 'react';
import { RoughNotation } from 'react-rough-notation';

const LearntSoFar = ({ pointsCovered }) => {
  return (
    <Grid
      position="relative"
      templateColumns="70px 1fr"
      p={4}
      border="solid 2px"
      borderColor="brand.crayola.500"
      borderRadius="5px"
      bg="brand.crayola.100"
      h="auto"
      maxW="600px"
      m="2em auto"
    >
      <Image
        boxSize={[70, 90]}
        fit="cover"
        src="/sponge-bob-pointing.png"
        position="absolute"
        top={['80%', '60%']}
        left={['-5%', '-10%']}
        zIndex={11}
        alt="SpongeBob Square Pants Pointing"
        gridColumn="1"
      />
      <Box gridColumn="2">
        <Box w="max-content">
          <RoughNotation type="underline" color="#FEE440" show={true}>
            <Text fontFamily="heading" mb={4}>
              Learnt so far...
            </Text>
          </RoughNotation>
        </Box>

        <UnorderedList>
          {pointsCovered.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Grid>
  );
};

export default LearntSoFar;
