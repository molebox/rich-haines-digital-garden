import { ChakraProvider, useColorMode, storageKey } from '@chakra-ui/core';
import theme from '../theme';
import { useEffect } from 'react';
import getShareImage from '@jlengstorf/get-share-image';
import SEO from './SEO';
import { Helmet } from 'react-helmet';

export function Chakra({
  children,
  cookies = '',
  evaluateThemeLazily,
  title,
  tags,
  description,
  slug,
}) {
  const socialImage = getShareImage({
    title,
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
    <ChakraProvider
      resetCSS
      theme={theme}
      // storageManager={cookieStorage(cookies)}
    >
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={socialImage} />

        {/* OpenGraph tags */}
        <meta
          property="og:url"
          content={`https://garden.richardhaines.dev/blog/${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImage} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@studio_hungry" />
        <meta name="twitter:creator" content="@studio_hungry" />
      </Helmet>
      {/* <SEO
        title={title}
        description={description}
        url={`https://garden.richardhaines.dev/blog/${slug}`}
        ogImage={{
          url: socialImage,
          title,
          description,
          image: socialImage,
          siteName: 'https://garden.richardhaines.dev/',
        }}
        twitter={{
          handle: '@studio_hungry',
          site: 'https://twitter.com/studio_hungry',
        }}
      /> */}
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
