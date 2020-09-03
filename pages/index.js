import {
  Flex,
  Text,
  Container,
  Box,
  Image,
  ChakraProvider,
} from '@chakra-ui/core';
import SEO from '@components/SEO';
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
import theme from './../src/theme/index';
import getShareImage from '@jlengstorf/get-share-image';
import { Helmet } from 'react-helmet';

export default function Index({ cookies }) {
  const tags = ['Jamstack', 'Blogging', 'Thoughts'];

  const socialImage = getShareImage({
    title:
      'My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX',
    tagline: tags.map((tag) => `• ${tag}`).join(' '),
    cloudName: 'richardhaines',
    imagePublicID: 'social-card/social-card-garden',
    textAreaWidth: 1193,
    textLeftOffset: 100,
    titleFontSize: 60,
    titleBottomOffset: 210,
    titleGravity: 'north_west',
    taglineGravity: 'north_west',
    titleFont: 'Gagalin-Regular.ttf',
    taglineFont: 'Gagalin-Regular.ttf',
    taglineTopOffset: 547,
    taglineFontSize: 30,
    textColor: '9B5DE5',
    version: 'v1599074590',
  });

  return (
    <HomePageProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Helmet>
          <title>
            My Digital Garden. A fun space for me to experiment with stuff and
            spill my thoughts into MDX
          </title>
          <meta name="description" content="" />
          <meta name="image" content={socialImage} />

          {/* OpenGraph tags */}
          <meta
            property="og:url"
            content={`https://garden.richardhaines.dev`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX"
          />
          <meta property="og:description" content="" />
          <meta property="og:image" content={socialImage} />

          {/* Twitter Card tags */}
          <meta
            name="twitter:title"
            content="My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX"
          />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content={socialImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@studio_hungry" />
          <meta name="twitter:creator" content="@studio_hungry" />
        </Helmet>
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
            <Container direction="column" maxW="1000px" centerContent>
              <Text
                color="brand.text"
                fontSize={['xl', '6xl']}
                fontFamily="heading"
              >
                hello, im rich haines
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '3xl']}
                fontFamily="heading"
                textAlign="center"
                my={3}
              >
                A software developer who specializes in Jamstack development
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '2xl']}
                fontFamily="heading"
                textAlign="center"
                my={3}
              >
                This is the new home for my digital garden. Its a fun space for
                me to experiment with stuff and spill my thoughts into MDX
                (Because MDX is cool).
              </Text>
              <NavLink href="/blogs/search">canvass Garden</NavLink>
            </Container>
          </Flex>
        </Box>
      </ChakraProvider>
      {/* <Chakra
        cookies={cookies}
        title="My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX"
        description=""
        tags={tags}
      >

      </Chakra> */}
    </HomePageProvider>
  );
}

export { getServerSideProps } from '@components/Chakra';

{
  /* <Box minH={500} borderTop="solid 5px" borderColor="brand.amethyst.500">
          <Container centerContent>
            <Text fontSize="xl" mt={4}>
              This section is going to use ScrollTrigger and a pin to show
              different panel layers
            </Text>
          </Container>
        </Box>
        <Box minH={500} borderTop="solid 5px" borderColor="brand.amethyst.500">
          <Container centerContent>
            <Text fontSize="xl" mt={4}>
              Haven't decided whats going to go here... Exciting!
            </Text>
          </Container>
        </Box> */
}
