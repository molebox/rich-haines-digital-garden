import React from 'react';
import { Image } from '@chakra-ui/core';

export const FullGrown = (
  <Image
    position="absolute"
    objectFit="cover"
    bottom="0"
    right="5px"
    boxSize="40px"
    src="/full-grown.png"
    alt="A fully grown plant"
  />
);
export const MidGrown = (
  <Image
    position="absolute"
    objectFit="cover"
    boxSize="30px"
    bottom="0"
    right="5px"
    src="/mid-grown.png"
    alt="A mid sized grown plant"
  />
);
export const BabyGrown = (
  <Image
    position="absolute"
    objectFit="cover"
    boxSize="20px"
    bottom="0"
    right="5px"
    src="/baby-grown.png"
    alt="A seedling plant"
  />
);
