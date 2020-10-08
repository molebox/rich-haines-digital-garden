import {
  Text,
  Container,
  Box,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollAnimation = () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // gsap.registerPlugin(ScrollTrigger);
      // gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
    gsap.utils.toArray('section').forEach((section, index) => {
      console.log({ section });
      const w = section.querySelector('.wrapper');
      console.log({ w });
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        },
      );
    });
  }, []);

  return (
    <Box
      // h="100vh"
      // minH="3500px"
      borderTop="solid 5px"
      borderColor="brand.amethyst.500"
      bg="brand.amethyst.100"
      overflow="auto"
    >
      <Box overflowX="hidden">
        <Box mt={100}>
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            I MAKE
          </Text>
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            COOL STUFF
          </Text>
        </Box>

        <Box as="section">
          <UnorderedList
            className="wrapper"
            listStyleType="none"
            display="flex"
          >
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-dev-resume.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/devpack-screenshot.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-vulcan.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/justask.dev.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/serverless-graphql-potter.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-pocket.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
          </UnorderedList>
        </Box>
        <Box maxH="600px">
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            LIKE
          </Text>
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            IN THESE PICS
          </Text>
        </Box>
        <Box as="section">
          <UnorderedList
            className="wrapper"
            listStyleType="none"
            display="flex"
          >
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-dev-resume.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/devpack-screenshot.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-vulcan.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/justask.dev.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/serverless-graphql-potter.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
            <ListItem w="clamp(500px, 60vw, 800px)" flexShrink={0}>
              <Image
                src="/images/gatsby-theme-pocket.PNG"
                h="874px"
                width="1240px"
                fit="contain"
              />
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mb={100}>
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            NUFF
          </Text>
          <Text
            fontFamily="heading"
            textAlign="center"
            fontSize="clamp(7rem, 15vw, 12rem)"
          >
            SAID
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HorizontalScrollAnimation;
