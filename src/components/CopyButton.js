import { useClipboard } from '@chakra-ui/core';
import { Button } from '@chakra-ui/core';

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button
      justifySelf="flex-end"
      position="absolute"
      top="0"
      right="20px"
      color="brand.crayola.300"
      mt={4}
      aria-label="Copy text"
      textTransform="uppercase"
      fontWeight={600}
      role="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Yay!' : 'Grab It'}
    </Button>
  );
}
