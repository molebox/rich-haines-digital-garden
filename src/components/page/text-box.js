import React from 'react';
import { Box, Text } from '@chakra-ui/core';

const TextBox = ({ firstText, secondText, ...rest }) => (
  <Box {...rest}>
    <Text
      fontFamily="heading"
      textAlign="center"
      fontSize="clamp(7rem, 15vw, 12rem)"
    >
      {firstText}
    </Text>
    <Text
      fontFamily="heading"
      textAlign="center"
      fontSize="clamp(7rem, 15vw, 12rem)"
    >
      {secondText}
    </Text>
  </Box>
);

export default TextBox;
