import { styled } from '../../../stitches.config';
import * as Form from '@radix-ui/react-form';
import { Input } from '../../common/components/Input';
import { useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { FormLabelText } from '../schema';

interface BasicFormProps {
  label: 'name' | 'phoneNumber' | 'address';
}

export const BasicForm: FC<BasicFormProps> = ({ label }) => {
  const { register } = useFormContext();

  return (
    <FormField name={FormLabelText[label]}>
      <FormLabel>{FormLabelText[label]}</FormLabel>
      <FormControl asChild>
        <Input {...register(label)} />
      </FormControl>
    </FormField>
  );
};

export const FormField = styled(Form.Field, {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  marginBottom: '16px',
});

export const FormLabel = styled(Form.Label, {
  gridColumn: '1 / 3',
  padding: '0 10px',

  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '35px',
  color: '$gray12',
});

export const FormControl = styled(Form.Control, {
  gridColumn: '3 / 13',
});
