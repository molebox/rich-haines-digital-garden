import { Box, Flex, Stack, Text, Image, Grid } from '@chakra-ui/core';

import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';

import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import { Chakra } from '@components/Chakra';
import { contentGlob, getBlogFileSlug } from '../blog/[...slug]';
import Navbar from '@components/Navbar';
import SemiCircle from 'src/assets/svg/semi-circle';
import ZigZags from 'src/assets/svg/zig-zags';
import Triangle from 'src/assets/svg/triangle';
import FourDotsHorizontal from 'src/assets/svg/four-dots-horizontal';
import Sun from 'src/assets/svg/sun';
export default function SearchPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);
  const tags = ['Jamstack', 'Blogging', 'Thoughts'];
  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

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
        h="100%"
        // w="100%"
        pb={3}
      >
        <SemiCircle />
        <ZigZags />
        <Triangle />
        <FourDotsHorizontal />
        <Sun />
        {/* Content Area + Input + Tag filter */}
        <Flex direction="column" justify="center" maxW="1440px" m="0 auto">
          <Search blogs={allMdx} handleFilter={handleFilter} />
          <Grid
            templateColumns="repeat(auto-fill, minmax(auto, 450px))"
            gap={5}
            autoRows="auto"
            m={6}
          >
            {filteredBlogs?.map((blog) => (
              <ContentBox key={blog.slug} blog={blog} />
            ))}
          </Grid>
        </Flex>
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
