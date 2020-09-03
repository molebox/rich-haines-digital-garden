import { Box, Flex, Stack, Text, Image } from '@chakra-ui/core';

import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';

import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import { Chakra } from '@components/Chakra';
import { contentGlob, getBlogFileSlug } from '../blog/[...slug]';
import Navbar from '@components/Navbar';
export default function SearchPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);
  const tags = ['Jamstack', 'Blogging', 'Thoughts'];
  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  const FullGrown = (
    <Image
      objectFit="cover"
      boxSize="40px"
      src="/full-grown.png"
      alt="A fully grown plant"
    />
  );
  const MidGrown = (
    <Image
      objectFit="cover"
      boxSize="30px"
      src="/mid-grown.png"
      alt="A mid sized grown plant"
    />
  );
  const BabyGrown = (
    <Image
      objectFit="cover"
      boxSize="20px"
      src="/baby-grown.png"
      alt="A seedling plant"
    />
  );

  return (
    <Chakra
      title="Search The Garden"
      description="A list of all my posts"
      tags={tags}
    >
      <Box
        bgImage="url(/bg.svg)"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        w="100%"
        overflowX="hidden"
        pb={3}
      >
        {/* Content Area + Input + Tag filter */}
        <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
          <Search blogs={allMdx} handleFilter={handleFilter} />
          <Flex
            direction="column"
            width="300px"
            h="200px"
            justify="space-evenly"
            p={4}
          >
            <Flex direction="row" w="100%" justify="space-between">
              <Text
                justifySelf="flex-start"
                alignSelf="flex-end"
                fontFamily="heading"
              >
                Finished Article:{' '}
              </Text>
              {FullGrown}
            </Flex>
            <Flex direction="row" w="100%" justify="space-between">
              <Text
                justifySelf="flex-start"
                alignSelf="flex-end"
                fontFamily="heading"
              >
                Working on Article:{' '}
              </Text>
              {MidGrown}
            </Flex>
            <Flex direction="row" w="100%" justify="space-between">
              <Text
                justifySelf="flex-start"
                alignSelf="flex-end"
                fontFamily="heading"
              >
                Started on Article:{' '}
              </Text>
              {BabyGrown}
            </Flex>
          </Flex>
          <Stack spacing={[2, 6, 12]}>
            {filteredBlogs?.map((blog) => (
              <ContentBox key={blog.slug} blog={blog} />
            ))}
          </Stack>
        </Stack>
        <Navbar />
      </Box>
    </Chakra>
  );
}

export function getStaticProps() {
  const files = glob.sync(contentGlob);

  const allMdx = files.map((file) => {
    const slug = getBlogFileSlug(file);

    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      allMdx,
    },
  };
}
