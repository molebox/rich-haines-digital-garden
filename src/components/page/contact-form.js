import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
  Input,
  Flex,
  Text,
  Box,
} from '@chakra-ui/core';
import ZigZags from 'src/assets/svg/zig-zags';
import ThreeTriangles from 'src/assets/svg/three-triangles';
import SemiCircle from 'src/assets/svg/semi-circle';

const ContactForm = () => {
  return (
    <Flex
      p={6}
      borderTop="solid 5px"
      borderColor="brand.minionYellow.500"
      bg="brand.seaGreen.200"
      align="center"
      justify="center"
      direction="column"
      minH="1000px"
      position="relative"
    >
      <ZigZags right="5%" top="300px" />
      <ThreeTriangles left="15%" top="50%" />
      <SemiCircle right="0" top="70%" transform="rotate(180deg)" />
      <Text mb={6} fontFamily="heading" fontSize={['xl', '6xl']}>
        OR MAYBE A CHINWAG?
      </Text>
      <Box
        minW={['300px', '500px']}
        as="form id="
        contact-Box
        as="form"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/FWdNMYui0XaLO8klcpss"
      >
        <FormControl w="100%" my={3} id="name" isRequired>
          <FormLabel fontFamily="heading" fontSize="2xl" htmlFor="name">
            Your name
          </FormLabel>
          <Input
            p={2}
            border="solid 2px"
            borderColor="brand.amethyst.500"
            borderRadius="5px"
            w="100%"
            type="text"
            name="name"
          />
        </FormControl>
        <FormControl w="100%" my={3} id="email" isRequired>
          <FormLabel fontFamily="heading" fontSize="2xl" htmlFor="email">
            Email address
          </FormLabel>
          <Input
            p={2}
            border="solid 2px"
            borderColor="brand.amethyst.500"
            borderRadius="5px"
            w="100%"
            type="email"
            name="email"
          />
        </FormControl>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        <FormControl w="100%" my={3} id="message" isRequired>
          <FormLabel fontFamily="heading" fontSize="2xl" htmlFor="message">
            Your message
          </FormLabel>
          <Textarea
            p={2}
            border="solid 2px"
            borderColor="brand.amethyst.500"
            borderRadius="5px"
            minH="200px"
            w="100%"
            name="message"
          />
        </FormControl>
        <FormControl id="submit-btn" w="100%">
          <Button
            p={2}
            bg="brand.minionYellow.300"
            type="submit"
            borderRadius="5px"
            w="100%"
            textTransform="uppercase"
            fontWeight={600}
          >
            Submit
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default ContactForm;
