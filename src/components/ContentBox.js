import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Stack } from '@chakra-ui/core';

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
      <Box
        role="group"
        maxW="1440px"
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
          <Stack direction="row" spacing={8}>
            {blog.tags.map((tag) => (
              <Text fontWeight={500} key={tag}>
                #{tag}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
