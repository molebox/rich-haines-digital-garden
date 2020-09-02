import React from 'react';
import { gsap } from 'gsap';
import {
  HomePageStateContext,
  HomePageDispatchContext,
} from './../../context/home-page-context';
import { Box } from '@chakra-ui/core';

function SingleCrossSmall1() {
  const state = React.useContext(HomePageStateContext);
  const dispatch = React.useContext(HomePageDispatchContext);

  React.useEffect(() => {
    if (state.onSingleCrossSmall1) {
      gsap.to('#single-cross-small', {
        rotate: '+=360',
        transformOrigin: '50% 50%',
      });
    }
  }, [state.onSingleCrossSmall1]);

  return (
    <Box
      as="svg"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display={['none', 'block']}
      position="absolute"
      left="18%"
      top="600px"
      zIndex={11}
      onMouseEnter={() =>
        dispatch({ type: 'onSingleCrossSmall1', payload: true })
      }
      onMouseLeave={() =>
        dispatch({ type: 'onSingleCrossSmall1', payload: false })
      }
    >
      <g id="single-cross-small">
        <path
          id="line-2"
          d="M18.7762 1L1 19.1571"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          id="line-1"
          d="M18.7762 19.1571L1 1"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </Box>
  );
}
export default SingleCrossSmall1;
