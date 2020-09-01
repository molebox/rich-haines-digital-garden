import defaultTheme from '@chakra-ui/theme';
import components from './components';

// Color Pallet: https://coolors.co/9b5de5-f15bb5-fee440-00bbf9-00f5d4

const theme = {
  ...defaultTheme,
  styles: {
    global: {
      'html, body': {
        cursor: 'url(/sponge-bob-gary.png), auto',
      },
    },
  },
  fonts: {
    heading: 'Gagalin-Regular',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '100px',
  },
  colors: {
    brand: {
      text: '#121212',
      capri: {
        100: '#00BBF9',
        200: '#00B8F5',
        300: '#00A8E0',
        400: '#0099CC',
        500: '#0080B8',
      },
      seaGreen: {
        100: '#00F5D4',
        200: '#00E0C2',
        300: '#00CCB1',
        400: '#00B89F',
        500: '#00A38D',
      },
      minionYellow: {
        100: '#FEE440',
        200: '#FEE334',
        300: '#FEE020',
        400: '#FEDD0B',
        500: '#F4D301',
      },
      crayola: {
        100: '#F15BB5',
        200: '#F056B3',
        300: '#EF43AA',
        400: '#ED31A2',
        500: '#EB1E99',
      },
      amethyst: {
        100: '#9B5DE5',
        200: '#9250E2',
        300: '#873EE0',
        400: '#7C2CDD',
        500: '#7222D3',
      },
    },
  },
  components,
};

export default theme;
