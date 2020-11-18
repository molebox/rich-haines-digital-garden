import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import glob from 'fast-glob';
import dynamic from 'next/dynamic';

import Code from '@components/Code';
import { Chakra } from '@components/Chakra';
import {
  Box,
  Container,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Image,
  Spinner,
} from '@chakra-ui/core';
import SemiCircle from 'src/assets/svg/semi-circle';
import ZigZags from './../../src/assets/svg/zig-zags';
import Navbar from '@components/Navbar';
import { RoughNotation } from 'react-rough-notation';
import Prerequisites from './../../src/components/post/prerequisites';
import LearntSoFar from './../../src/components/post/learnt-so-far';
import { Suspense } from 'react';
import Stork from './../../src/components/bird/stork';
import { Html } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';


const ThreeBall = dynamic(
  () => import('./../../src/components/post/three-ball'),
  { ssr: false },
);
const ThreeBallDistort = dynamic(
  () => import('./../../src/components/post/three-ball-distort'),
  { ssr: false },
);
const ThreeBallWobble = dynamic(
  () => import('./../../src/components/post/three-ball-wobble'),
  { ssr: false }
,

);

const components = {
  code: Code,
  h1: (props) => (
    <Text fontSize="2xl" fontFamily="heading" mb={3}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Text fontSize="xl" fontFamily="heading" my={3}>
      {props.children}
    </Text>
  ),
  h3: (props) => (
    <Text fontSize="md" fontFamily="heading" my={3}>
      {props.children}
    </Text>
  ),
  ul: (props) => <UnorderedList my={2}>{props.children}</UnorderedList>,
  li: (props) => <ListItem>{props.children}</ListItem>,
  p: (props) => <Text my={2}>{props.children}</Text>,
  a: (props) => (
    <Link isExternal href={props.href}>
      <RoughNotation multiline type="highlight" color="#F056B3" show={true}>
        {props.children}
      </RoughNotation>
    </Link>
  ),
  Prerequisites,
  img: (props) => (
    <Image m="0 auto" src={props.src} alt={props.alt} boxSize={props.boxSize} />
  ),
  LearntSoFar,
  ThreeBall,
  ThreeBallDistort,
  ThreeBallWobble,
};

export default function BlogPost({ mdxSource, frontMatter, slug }) {
  const content = hydrate(mdxSource, { components });
  const { title, tags, description } = frontMatter;

  return (
    <Chakra title={title} tags={tags} slug={slug[0]} description={description}>
      <Box
        bgImage="url(/bg.svg)"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        p={5}
      >
        <SemiCircle left="0" top="200px" />
        <ZigZags right="5%" top="10px" />
        <Container maxW="1440px">
        <Canvas colorManagement>
            <Suspense
              fallback={
                <Html center>
                  <Spinner />
                </Html>
              }
            >
              <Stork position={[10, 10, 100]} />
            </Suspense>
          </Canvas>
          <Text
            fontSize={['4xl', '5xl']}
            borderBottom="solid 3px"
            mb={5}
            textAlign="center"
            fontFamily="heading"
          >
            {frontMatter.title}
          </Text>
          {content}
        </Container>
        <Navbar showGardenLink />
      </Box>
    </Chakra>
  );
}

// This glob is what will be used to generate static routes
const contentPath = 'src/blogs';
export const contentGlob = `${contentPath}/**/*.mdx`;
export const getBlogFileSlug = (blogFilePath) => {
  const filename = blogFilePath.replace(`${contentPath}/`, '');
  const slug = filename.replace(
    new RegExp(path.extname(blogFilePath) + '$'),
    '',
  );
  return slug;
};

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    return {
      params: {
        slug: getBlogFileSlug(file).split('/'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const pathRegex = new RegExp(`^${contentPath}/${path.join(...slug)}.mdx$`);
  const fullPath = files.find((file) => pathRegex.test(file));

  if (!fullPath) {
    console.warn('No MDX file found for slug');
  }

  const mdxSource = await fs.readFile(fullPath);
  const { content, data } = matter(mdxSource);

  const mdx = await renderToString(content, { components, scope: data });

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
      slug,
    },
  };
}
