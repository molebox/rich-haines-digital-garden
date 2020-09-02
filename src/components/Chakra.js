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
        title="Rich Haines Digital Garden"
        description="This is the new home for my digital garden. Its a fun space for
        me to experiment with stuff and spill my thoughts into MDX
        (Because MDX is cool)"
        url="https://garden.richardhaines.dev/"
        ogImage={{
          url: 'https://garden.richardhaines.dev/',
          title: 'Rich Haines Digital Garden',
          description: 'A fun space for me to experiment with stuff and spill my thoughts into MDX',
          image: ``,
          siteName: 'garden.richardhaines.dev',
        }}
        twitter={{
          handle: '@studio_hungry',
          site: 'https://garden.richardhaines.dev/',
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
