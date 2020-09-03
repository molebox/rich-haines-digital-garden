import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Stack, Flex, Image } from '@chakra-ui/core';

export default function ContentBox({ blog }) {
  const full = (
    <Image
      position="absolute"
      objectFit="cover"
      top="5px"
      right="0"
      boxSize="50px"
      src="url(/full-grown.png)"
      alt="A fully grown plant"
    />
  );
  const mid = (
    <Image
      position="absolute"
      objectFit="cover"
      boxSize="40px"
      top="5px"
      right="0"
      src="url(/mid-grown.png)"
      alt="A mid sized grown plant"
    />
  );
  const baby = (
    <Image
      position="absolute"
      objectFit="cover"
      boxSize="30px"
      top="5px"
      right="0"
      src="url(/baby-grown.png)"
      alt="A seedling plant"
    />
  );

  const growth = () => {
    switch (blog.growth) {
      case 'full':
        return full;
      case 'mid':
        return mid;
      case 'baby':
        return baby;
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
