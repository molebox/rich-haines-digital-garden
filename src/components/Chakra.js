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
import getShareImage from '@jlengstorf/get-share-image';

export function Chakra({ children, cookies = '', evaluateThemeLazily }) {
  useEffect(() => {
    // let tl = gsap.timeline({repeat: 2, repeatDelay: 1});
    // gsap.to("#zig-zags", {y : 18}, {y: -18, yoyo: true})
    // gsap.to("#zag", {x: 500, duration: 3, repeat: 2, yoyo: true});
  }, []);

  const tags = ['Jamstack', 'Blogging', 'Thoughts']

  const socialImage = getShareImage({
    title: 'My Digital Garden. A fun space for me to experiment with stuff and spill my thoughts into MDX',
    tagline: tags.map(tag => `• ${tag}`).join(" "),
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
    <ChakraProvider
      resetCSS
      theme={theme}
      // storageManager={cookieStorage(cookies)}
    >
      <SEO
        title="My Digital Garden"
        description="This is the new home for my digital garden. Its a fun space for
        me to experiment with stuff and spill my thoughts into MDX
        (Because MDX is cool)"
        url="https://richardhaines-dev-but-fun.vercel.app/"
        ogImage={{
          url: socialImage,
          title: 'My Digital Garden',
          description:
            'A fun space for me to experiment with stuff and spill my thoughts into MDX',
          image: socialImage,
          siteName: 'https://richardhaines-dev-but-fun.vercel.app/',
        }}
        twitter={{
          handle: '@studio_hungry',
          site: 'https://twitter.com/studio_hungry',
        }}
      />
      {/* <Navbar /> */}
      {/* {evaluateThemeLazily && <LazyThemeEvaluator />} */}

      {children}
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
