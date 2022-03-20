import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChackraInpunt,
  InputProps as ChackraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldErrors } from 'react-hook-form';

interface InputsProps extends ChackraInputProps {
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  errors: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputsProps> = (
  { errors, name, label, type, ...rest },
  ref
) => {
  const error = errors[name];
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInpunt
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
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
