import React from 'react';
import { gsap } from 'gsap';
import {
  HomePageStateContext,
  HomePageDispatchContext,
} from './../../context/home-page-context';

function SingleCrossLarge() {
  const state = React.useContext(HomePageStateContext);
  const dispatch = React.useContext(HomePageDispatchContext);
  React.useEffect(() => {
    if (state.onSingleCrossLarge) {
      gsap.to('#single-cross-large', {
        rotate: '+=360',
        transformOrigin: '50% 50%',
      });
    }
  }, [state.onSingleCrossLarge]);

  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: '84%',
        right: '12%',
        top: '28%',
        bottom: '67%',
      }}
      onMouseEnter={() =>
        dispatch({ type: 'onSingleCrossLarge', payload: true })
      }
      onMouseLeave={() =>
        dispatch({ type: 'onSingleCrossLarge', payload: false })
      }
    >
      <g id="single-cross-large">
        <path
          id="line-2"
          d="M41.2937 1.08572L1 42.2428"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          id="line-1"
          d="M41.2937 42.2428L1 1.08572"
          stroke="#121212"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
}

export default SingleCrossLarge;
