import { Flex, Text, Container } from '@chakra-ui/core';

import { Chakra } from '@components/Chakra';
import HomePageProvider from 'src/context/home-page-context';

export default function Index({ cookies }) {
  return (
    <HomePageProvider>
      <Chakra cookies={cookies}>
        <Flex justify="center" align="center" h="100%">
          <Container direction="column" maxW="1440px" centerContent>
            <Text
              color="brand.text"
              fontSize={['3xl', '6xl']}
              fontFamily="heading"
            >
              hello, im rich haines
            </Text>
            <Text
              color="brand.text"
              fontSize={['3xl', '4xl']}
              fontFamily="heading"
            >
              A software developer who specializes in Jamstack development
            </Text>
            <Text
              color="brand.text"
              fontSize={['2xl', '3xl']}
              fontFamily="heading"
            >
              I love to experiment with stuff
            </Text>
          </Container>
        </Flex>
      </Chakra>
    </HomePageProvider>
  );
}

export { getServerSideProps } from '@components/Chakra';
