import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export function Input({ ...rest }: InputProps) {
  return (
    <ChakraInput layerStyle="input-primary" borderColor='base.border' {...rest} />
  );
}