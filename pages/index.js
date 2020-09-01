import { Flex, Text, Container } from '@chakra-ui/core';

import { Chakra } from '@components/Chakra';

export default function Index({ cookies }) {
  return (
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
  );
}

export { getServerSideProps } from '@components/Chakra';
