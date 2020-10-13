import { Flex, Text, Container, Box, Image, Link, Grid } from '@chakra-ui/core';
import { gsap } from 'gsap';
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
import Moon from '@components/moon';
import DotsBox from 'src/assets/svg/dots-box';
import Footer from './../src/components/footer';
import HorizontalScrollAnimation from './../src/components/page/horizontal-scroll-animation';
import ContactForm from './../src/components/page/contact-form';

export default function Index({ cookies }) {
  const tags = ['Jamstack', 'Blogging', 'Thoughts'];

  React.useEffect(() => {
    if (typeof window !== undefined) {
      let TL = gsap.timeline();
      TL.fromTo('#name', { opacity: 0 }, { opacity: 1, duration: 1 });
      TL.fromTo('#about-1', { opacity: 0 }, { opacity: 1, duration: 1 });
      TL.fromTo('#about-2', { opacity: 0 }, { opacity: 1, duration: 1 });
      TL.fromTo('#blog-link', { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <HomePageProvider>
      <Chakra
        cookies={cookies}
        title="My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX"
        description="A fun space for me to experiment with stuff and spill my thoughts into MDX"
        tags={tags}
        isHomePage
      >
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
          <Moon />
          <DotsBox />
          <FourDotsHorizontal />
          <FourDotsDiagonal />
          <Triangle />
          <SemiCircle left="0" top="400px" />
          {/* <DotsBox /> */}
          <Crosses />
          <ThreeTriangles right="15%" top="175px" />
          {/* <SingleCrossLarge /> */}
          <SingleCrossSmall1 />
          <SingleCrossSmall2 />
          {/* <ZigZags /> */}
          <BigCloud1 />
          <BigCloud2 />
          <SmallCloud1 />
          <SmallCloud2 />
          <Grid
            templateRows="1fr 150px"
            templateAreas={`
            'main main main'
          `}
            h="100vh"
          >
            <Container
              gridArea="main"
              direction="column"
              justifySelf="center"
              alignSelf="center"
              maxW="1000px"
              centerContent
            >
              <Text
                color="brand.text"
                fontSize={['xl', '6xl']}
                fontFamily="heading"
                id="name"
              >
                hello, im rich haines
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '3xl']}
                fontFamily="heading"
                textAlign="center"
                my={3}
                id="about-1"
              >
                A software developer who specializes in Jamstack development
              </Text>
              <Text
                color="brand.text"
                fontSize={['md', '2xl']}
                fontFamily="heading"
                textAlign="center"
                my={3}
                id="about-2"
              >
                This is a fun space for me to experiment with stuff and spill my
                thoughts into MDX (Because MDX is cool).
              </Text>
              <NavLink href="/blogs/search">start reading</NavLink>
            </Container>
          </Grid>
        </Box>
        {/* <HorizontalScrollAnimation />
        <ContactForm /> */}
        <Footer />
      </Chakra>
    </HomePageProvider>
  );
}

export { getServerSideProps } from '@components/Chakra';
