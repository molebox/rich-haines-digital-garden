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
