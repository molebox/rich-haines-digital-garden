import { Box } from '@chakra-ui/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextBox from './text-box';
import ProjectImageList from './project-image-list';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollAnimation = () => {
  React.useEffect(() => {
    // This code is totally copied from a Noel Delgado Pen
    // Which you can view here: https://codepen.io/noeldelgado/pen/BaogqYy
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
      borderTop="solid 5px"
      borderColor="brand.amethyst.500"
      bg="brand.amethyst.100"
      overflow="auto"
    >
      <Box overflowX="hidden">
        <TextBox mt={100} firstText="I MAKE" secondText="COOL STUFF" />
        <ProjectImageList />
        <TextBox firstText="LIKE" secondText="IN THESE PICS" />
        <ProjectImageList />
        <TextBox mb={100} firstText="NUFF" secondText="SAID" />
      </Box>
    </Box>
  );
};

export default HorizontalScrollAnimation;
