import { Flex, Text, UnorderedList, ListItem, Box } from '@chakra-ui/core';
import React from 'react';
import { RoughNotation } from 'react-rough-notation';

const Prerequisites = ({ audience, stackKnowledge }) => {
  return (
    <Flex
      direction="column"
      bg="brand.text"
      border="solid 2px"
      borderColor="brand.crayola.500"
      borderRadius="5px"
      p={4}
      justify="space-evenly"
      minH="250px"
      maxW="650px"
      m="2em auto"
    >
      <Box>
        <Box w="max-content">
          <RoughNotation type="highlight" color="#FEE440" show={true}>
            <Text fontFamily="heading" fontSize="xl">
              Prerequisites
            </Text>
          </RoughNotation>
        </Box>

        <Text color="brand.crayola.100" mt={2}>{audience}</Text>
      </Box>
      <Box>
        <Box w="max-content">
          <RoughNotation type="highlight" color="#FEE440" show={true}>
            <Text fontFamily="heading" fontSize="md">
              Helpful to know
            </Text>
          </RoughNotation>
        </Box>

        <UnorderedList mt={2} color="brand.crayola.100">
          {stackKnowledge.map((stack) => (
            <ListItem>{stack}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Prerequisites;
