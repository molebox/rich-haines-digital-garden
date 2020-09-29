import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import CopyButton from '@components/CopyButton.js';
import { Flex, Box, Text, Grid, Spacer } from '@chakra-ui/core';
import TypeScript from './../assets/svg/typescript';
import JavaScript from './../assets/svg/javascript';
import Bash from './../assets/svg/bash';
import ReactSVG from './../assets/svg/react-svg';

export default function Code({ children, className }) {
  const language = className.replace(/language-/, '');

  const showLanguage = () => {
    switch (language) {
      case 'typescript':
        return <TypeScript />;
      case 'javascript':
        return <JavaScript />;
      case 'js':
        return <JavaScript />;
      case 'bash':
        return <Bash />;
      case 'jsx':
        return <ReactSVG />;
      default:
        break;
    }
  };

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Flex position="relative" direction="column" my={6}>
          <Grid
            h="50px"
            bg="brand.text"
            mb="-20px"
            borderTop="solid 2px"
            borderTopColor="brand.crayola.500"
            borderLeft="solid 2px"
            borderLeftColor="brand.crayola.500"
            borderRight="solid 2px"
            borderRightColor="brand.crayola.500"
            borderBottom="solid 1px"
            borderBottomColor="brand.crayola.100"
            templateColumns="auto 100px 80px"
            alignItems="center"
            justifyItems="center"
          >
            <Spacer />
            {showLanguage()}
            {/* <Text color="brand.crayola.100">{language}</Text> */}
            <CopyButton value={children.trim()} />
          </Grid>
          <pre
            className={className}
            style={{
              ...style,
              overflow: 'scroll',
              overflowY: 'hidden',
              marginTop: 20,
              marginBottom: 20,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
              borderBottom: 'solid 2px',
              borderLeft: 'solid 2px',
              borderRight: 'solid 2px',
              borderBottomColor: '#EB1E99',
              borderLeftColor: '#EB1E99',
              borderRightColor: '#EB1E99',
              backgroundColor: '#121212',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            {/* <CopyButton value={children.trim()} /> */}
          </pre>
        </Flex>
      )}
    </Highlight>
  );
}
