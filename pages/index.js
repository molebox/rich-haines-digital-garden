import { Flex, Text, Container, Box, Image } from '@chakra-ui/core';

import { Chakra } from '@components/Chakra';
import NavLink from '@components/nav-link';
import HomePageProvider from 'src/context/home-page-context';
import Sun from 'src/assets/svg/sun';
import FourDotsHorizontal from 'src/assets/svg/four-dots-horizontal';
import FourDotsDiagonal from 'src/assets/svg/four-dots-diagonal';
import Triangle from 'src/assets/svg/triangle';
import SemiCircle from 'src/assets/svg/semi-circle';
import DotsBox from 'src/assets/svg/dots-box';
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
          w="100vw"
          overflowX="hidden"
          // cursor="url(/sponge-bob-pointing.png), auto"
        >
          <Sun />
          <FourDotsHorizontal />
          <FourDotsDiagonal />
          <Triangle />
          <SemiCircle />
          <DotsBox />
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
            style={{
              position: 'absolute',
              top: '15%',
              right: '46%',
              zIndex: 11,
            }}
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
              <NavLink href="/blogs/search">Tend Garden</NavLink>
            </Container>
          </Flex>
        </Box>
      </Chakra>
    </HomePageProvider>
  );
}

export { getServerSideProps } from '@components/Chakra';
