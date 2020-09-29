import { useClipboard } from '@chakra-ui/core';
import { Button } from '@chakra-ui/core';

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button
      color="brand.crayola.300"
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
