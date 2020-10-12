import React from 'react';
import { Box, UnorderedList, ListItem, Image } from '@chakra-ui/core';

const ProjectImageList = () => (
  <Box as="section">
    <UnorderedList className="wrapper" listStyleType="none" display="flex">
      <ListItem w="clamp(500px, 60vw, 1000px)" flexShrink={0}>
        <Image
          src="/images/gatsby-theme-dev-resume.PNG"
          h="874px"
          width="1240px"
          fit="contain"
        />
      </ListItem>
      <ListItem w="clamp(500px, 60vw, 1000px)" flexShrink={0}>
        <Image
          src="/images/devpack-screenshot.PNG"
          h="874px"
          width="1240px"
          fit="contain"
        />
      </ListItem>
      <ListItem w="clamp(500px, 60vw, 1000px)" flexShrink={0}>
        <Image
          src="/images/gatsby-theme-vulcan.PNG"
          h="874px"
          width="1240px"
          fit="contain"
        />
      </ListItem>
      <ListItem w="clamp(500px, 60vw, 1000px)" flexShrink={0}>
        <Image
          src="/images/justask.dev.PNG"
          h="874px"
          width="1240px"
          fit="contain"
        />
      </ListItem>
      <ListItem w="clamp(500px, 60vw, 1000px)" flexShrink={0}>
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
);

export default ProjectImageList;
