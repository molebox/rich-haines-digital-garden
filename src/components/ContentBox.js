import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Stack, Flex } from '@chakra-ui/core';

export default function ContentBox({ blog }) {
  return (
    <Link
      as={NextLink}
      href={`/blog/${blog.slug}`}
      _hover={{
        textDecor: 'none',
        bgColor: 'brand.crayola.100',
        borderRadius: '5px',
      }}
    >
      <Flex
        role="group"
        maxW={['300px', '1440px']}
        w="100%"
        border="solid 3px"
        borderColor="brand.crayola.500"
        borderRadius="5px"
        p={8}
      >
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
