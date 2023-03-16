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
  marginBottom: '16px',

  variants: {
    display: {
      grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
      flex: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    display: 'grid',
  },
});

export const FormLabel = styled(Form.Label, {
  fontSize: '16px',
  fontWeight: 700,
  color: '$gray12',
  wordBreak: 'keep-all',

  variants: {
    display: {
      grid: {
        gridColumn: '1 / 3',
        padding: '0 10px 0 0',
        alignSelf: 'center',
      },
      flex: {
        marginBottom: '8px',
      },
    },
  },

  defaultVariants: {
    display: 'grid',
  },
});

export const FormInput = styled('div', {
  variants: {
    display: {
      grid: {
        gridColumn: '3 / 13',
      },
      flex: {},
    },
  },

  defaultVariants: {
    display: 'grid',
  },
});
