import React from 'react';
import { TextField } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

export const textFieldCommonProps = {
  variant: 'filled',
  size: 'small',
} as const;

function FormTextField<TFieldValues>({
  control,
  name,
  type = 'text',
  defaultValue = '',
}: UseControllerProps<TFieldValues> & {
  defaultValue?: any;
  name: string;
  type?: string;
}) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController<TFieldValues>({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });

  return (
    <TextField
      {...textFieldCommonProps}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      inputRef={ref}
    />
  );
}

export default FormTextField;
