import React from 'react';
import { Link as NextLink } from 'next/link';
import { Flex, Text, Box, Link } from '@chakra-ui/core';

function NavLink({ children, ...props }) {
  return (
    <Link
      color="brand.text"
      textTransform="uppercase"
      fontSize={['md', '2xl']}
      borderBottom="solid 2px"
      borderColor="brand.crayola.500"
      _hover={{ borderColor: 'brand.amethyst.500' }}
      p={2}
      as={NextLink}
      mt={6}
      {...props}
      id="blog-link"
    >
      {children}
    </Link>
  );
}

export default NavLink;
