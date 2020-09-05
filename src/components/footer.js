import React from 'react';
import { Box, Flex, Text, Link, Container } from '@chakra-ui/core';
import { RoughNotation } from 'react-rough-notation';

const DynamicYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Flex
      direction="column"
      gridArea="footer"
      as="footer"
      alignItems="center"
      alignSelf="center"
      justifySelf="center"
      w="275px"
    >
      <Flex
        direction="row"
        mt={6}
        align="center"
        justify="space-evenly"
        w="100%"
      >
        <Text fontSize="sm">Built with </Text>
        <Link fontSize="sm" isExternal href="https://nextjs.org/">
          <RoughNotation type="highlight" color="#00BBF9" show={true}>
            NextJs
          </RoughNotation>
        </Link>
        <Link fontSize="sm" isExternal href="https://mdxjs.com/">
          <RoughNotation type="highlight" color="#F15BB5" show={true}>
            MDX
          </RoughNotation>
        </Link>
        <Text fontSize="sm">and</Text>
        <Link fontSize="sm" isExternal href="https://greensock.com/gsap/">
          <RoughNotation type="highlight" color="#9B5DE5" show={true}>
            GSAP
          </RoughNotation>
        </Link>
      </Flex>
      <Text fontSize="sm" mt={3}>
        Copyright &copy; {DynamicYear} Rich Haines
      </Text>
    </Flex>
  );
};

export default Footer;
