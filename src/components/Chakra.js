import {
  cookieStorage,
  ChakraProvider,
  useColorMode,
  storageKey,
  Box,
  Image,
} from '@chakra-ui/core';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import theme from '../theme';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Sun from 'src/assets/svg/sun';
import FourDotsHorizontal from './../assets/svg/four-dots-horizontal';
import FourDotsDiagonal from './../assets/svg/four-dots-diagonal';
import Triangle from 'src/assets/svg/triangle';
import SemiCircle from 'src/assets/svg/semi-circle';
import ZigZags from 'src/assets/svg/zig-zags';
import DotsBox from 'src/assets/svg/dots-box';
import Crosses from 'src/assets/svg/crosses';
import SingleCrossLarge from 'src/assets/svg/single-cross-large';
import SingleCrossSmall1 from '../assets/svg/single-cross-small-1';
import SingleCrossSmall2 from 'src/assets/svg/single-cross-small-2';
import Draggable from 'react-draggable';
import BigCloud1 from './big-cloud-1';
import SmallCloud2 from './small-cloud-2';
import BigCloud2 from './big-cloud-2';
import SmallCloud1 from './small-cloud-1';
export function Chakra({ children, cookies = '', evaluateThemeLazily }) {
  useEffect(() => {
    // let tl = gsap.timeline({repeat: 2, repeatDelay: 1});
    // gsap.to("#zig-zags", {y : 18}, {y: -18, yoyo: true})
    // gsap.to("#zag", {x: 500, duration: 3, repeat: 2, yoyo: true});
  }, []);

  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      // storageManager={cookieStorage(cookies)}
    >
      <SEO
        title="Nextjs + MDX Starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        ogImage={{
          url: 'www.whatever.com',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Your site name',
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
        }}
      />
      {/* <Navbar /> */}
      {evaluateThemeLazily && <LazyThemeEvaluator />}

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
        <SingleCrossLarge />
        <SingleCrossSmall1 />
        <SingleCrossSmall2 />
        <ZigZags />
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
        {children}
      </Box>
    </ChakraProvider>
  );
}

function LazyThemeEvaluator() {
  const { toggleColorMode, colorMode } = useColorMode();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // currently taken from
      // https://github.com/chakra-ui/chakra-ui/blob/develop/packages/color-mode/src/storage-manager.ts#L35
      // related issue here https://github.com/chakra-ui/chakra-ui/issues/1581
      // its in the nature of user-based themes sadly, cant statically extract
      const match = document.cookie.match(
        new RegExp(`(^| )${storageKey}=([^;]+)`),
      );
      const value = match ? match[2] : 'light';

      if (colorMode !== value) {
        toggleColorMode();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
