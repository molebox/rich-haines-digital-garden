import React from 'react';
import { Box, Container, Text } from '@chakra-ui/core';
import { Chakra } from '@components/Chakra';
import NavLink from '@components/nav-link';

export default function FormSuccess() {
  const tags = ['Jamstack', 'Blogging', 'Thoughts'];
  return (
    <Chakra
      title="My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX"
      description="A fun space for me to experiment with stuff and spill my thoughts into MDX"
      tags={tags}
    >
      <Box
        bgImage="url(/bg.svg)"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        w="100%"
        display="flex"
      >
        <Container
          maxW="100ch"
          centerContent
          justifySelf="center"
          alignSelf="center"
        >
          <Text as="h1" fontSize="5xl" fontFamily="heading">
            Form successfully submitted!
          </Text>
          <Text as="h2" fontSize="3xl" fontFamily="heading">
            Thanks!
          </Text>
          <NavLink href="/">take me home</NavLink>
        </Container>
      </Box>
    </Chakra>
  );
}
