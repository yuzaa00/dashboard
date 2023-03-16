import * as Form from '@radix-ui/react-form';
import { FC } from 'react';
import { styled } from '../../../stitches.config';

interface FormMessageProps {
  message: string;
}

export const FormMessage: FC<FormMessageProps> = ({ message }) => {
  return <StyledFormMessage>{message}</StyledFormMessage>;
};

const StyledFormMessage = styled(Form.Message, {
  color: 'red',
  fontSize: '12px',
});

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

export const FormInput = styled('div', {
  gridColumn: '3 / 13',
});
