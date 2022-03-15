import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  InputProps as ChackraInputProps,
} from '@chakra-ui/react';

interface InputsProps extends ChackraInputProps {
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Inputs = ({ name, label, type, ...rest }: InputsProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        id={name}
        name={name}
        type={type}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};
