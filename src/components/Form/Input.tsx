import {
  FormControl,
  FormLabel,
  Input as ChackraInpunt,
  InputProps as ChackraInputProps,
} from '@chakra-ui/react';

interface InputsProps extends ChackraInputProps {
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input = ({ name, label, type, ...rest }: InputsProps) => {
  return (
    <FormControl>
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
        {...rest}
      />
    </FormControl>
  );
};
