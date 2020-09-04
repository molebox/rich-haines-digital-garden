import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Stack, Flex, Image } from '@chakra-ui/core';
import { FullGrown, MidGrown, BabyGrown } from './plants';

export default function ContentBox({ blog }) {
  const growth = () => {
    switch (blog.growth) {
      case 'full':
        return FullGrown;
      case 'mid':
        return MidGrown;
      case 'baby':
        return BabyGrown;
    }
  };

  return (
    <Link
      as={NextLink}
      href={`/blog/${blog.slug}`}
      _hover={{
        textDecor: 'none',
        bgColor: 'brand.crayola.100',
        borderRadius: '5px',
      }}
      h="230px"
    >
      <Flex
        role="group"
        maxW={['300px', '1440px']}
        w="100%"
        border="solid 3px"
        borderColor="brand.crayola.500"
        borderRadius="5px"
        p={8}
        position="relative"
        h="230px"
      >
        {growth()}
        <Stack>
          <Box>
            <Text fontFamily="heading" _groupHover={{ textDecor: 'underline' }}>
              {blog.title}
            </Text>
            {/* <Text fontWeight={500}> By: {blog.author}</Text> */}
            <Text>{blog.description}</Text>
          </Box>
          <Stack direction={['column', 'row']} spacing={2}>
            {blog.tags.map((tag) => (
              <Text fontWeight={500} key={tag}>
                #{tag}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Flex>
    </Link>
  );
}
