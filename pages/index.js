import { Flex, Text, Container, Box, Image } from '@chakra-ui/core';

import { Chakra } from '@components/Chakra';
import NavLink from '@components/nav-link';
import HomePageProvider from 'src/context/home-page-context';
import Sun from 'src/assets/svg/sun';
import FourDotsHorizontal from 'src/assets/svg/four-dots-horizontal';
import FourDotsDiagonal from 'src/assets/svg/four-dots-diagonal';
import Triangle from 'src/assets/svg/triangle';
import SemiCircle from 'src/assets/svg/semi-circle';
import Crosses from 'src/assets/svg/crosses';
import ThreeTriangles from 'src/assets/svg/three-triangles';
import SingleCrossSmall1 from './../src/assets/svg/single-cross-small-1';
import SingleCrossSmall2 from './../src/assets/svg/single-cross-small-2';
import BigCloud1 from './../src/components/big-cloud-1';
import BigCloud2 from './../src/components/big-cloud-2';
import SmallCloud1 from './../src/components/small-cloud-1';
import SmallCloud2 from './../src/components/small-cloud-2';

export default function Index({ cookies }) {
  return (
    <HomePageProvider>
      <Chakra cookies={cookies}>
        <Box
          bgImage="url(/bg.svg)"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="100vh"
          w="100%"
          overflowX="hidden"
        >
          <Sun />
          <FourDotsHorizontal />
          <FourDotsDiagonal />
          <Triangle />
          <SemiCircle />
          {/* <DotsBox /> */}
          <Crosses />
          <ThreeTriangles />
          {/* <SingleCrossLarge /> */}
          <SingleCrossSmall1 />
          <SingleCrossSmall2 />
          {/* <ZigZags /> */}
          <Image
            boxSize={100}
            fit="cover"
            src="sponge-bob-pointing.png"
            display={['none', 'block']}
            position="absolute"
            top="140px"
            right="45.5%"
            zIndex={11}
            alt="SpongeBob Square Pants Pointing"
          />
          <BigCloud1 />
          <BigCloud2 />
          <SmallCloud1 />
          <SmallCloud2 />
          <Flex justify="center" align="center" h="100%">
            <Container direction="column" maxW="1440px" centerContent>
              <Text
                color="brand.text"
                fontSize={['xl', '6xl']}
                fontFamily="heading"
              >
                hello, im rich haines
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '4xl']}
                fontFamily="heading"
                textAlign="center"
                my={3}
              >
                A software developer who specializes in Jamstack development
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '3xl']}
                fontFamily="heading"
              >
                I love to experiment with stuff
              </Text>
              <NavLink href="/blogs/search">Tend Garden</NavLink>
            </Container>
          </Flex>
        </Box>
        <Box minH={500} borderTop="solid 5px" borderColor="brand.amethyst.500">
          <Container centerContent>
            <Text fontSize="xl" mt={4}>
              This section is going to use ScrollTrigger and a pin to show different panel layers
            </Text>
          </Container>
        </Box>
        <Box minH={500} borderTop="solid 5px" borderColor="brand.amethyst.500">
          <Container centerContent>
            <Text fontSize="xl" mt={4}>
              Haven't decided whats going to go here... Exciting!
            </Text>
          </Container>
        </Box>
      </Chakra>
    </HomePageProvider>
  );
}

export { getServerSideProps } from '@components/Chakra';
