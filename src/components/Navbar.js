import { Flex, Text, Box, Link, Image } from '@chakra-ui/core';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import { Link as NextLink } from 'next/link';
import { useImage } from 'use-cloudinary';

function NavLink({ children, ...props }) {
  return (
    <Link as={NextLink} px={2} {...props}>
      {children}
    </Link>
  );
}

export default function Navbar({ showGardenLink }) {
  // const { generateUrl, url, isLoading } = useImage({
  //   cloudName: 'testing-hooks-upload',
  // });

  // React.useEffect(() => {
  //   generateUrl({
  //     publicId: 'transparent_dom_logo',
  //     transforms: {
  //       height: 30,
  //       width: 30,
  //     },
  //   });
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Flex
      h={['50px', '50vh']}
      px={5}
      py={4}
      direction={['row', 'column']}
      justifyContent="space-evenly"
      alignItems="center"
      position={['static', 'fixed']}
      right={[null, '0']}
      top={[0, '100px']}
    >
      <NavLink ml={4} href="/">
        <Text
          transform={[null, 'rotate(90deg)']}
          fontFamily="heading"
          fontSize={['sm', '1xl']}
          borderBottom="solid 2px"
          borderColor="brand.crayola.500"
          _hover={{ borderColor: 'brand.crayola.200' }}
          p={2}
        >
          The funky page
        </Text>
      </NavLink>
      {showGardenLink ? (
        <NavLink ml={4} href="/blogs/search">
          <Text
            transform={[null, 'rotate(90deg)']}
            fontFamily="heading"
            fontSize={['sm', '1xl']}
            borderBottom="solid 2px"
            borderColor="brand.crayola.500"
            _hover={{ borderColor: 'brand.crayola.200' }}
            p={2}
          >
            The Garden
          </Text>
        </NavLink>
      ) : null}
    </Flex>
  );
}
