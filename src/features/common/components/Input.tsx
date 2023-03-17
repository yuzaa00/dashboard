import { styled } from '../../../stitches.config';

export const Input = styled('input', {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  fontSize: '15px',
  color: '$gray12',
  boxShadow: '0 0 0 1px $colors$gray8',
  padding: '0 10px',
  height: '35px',
  lineHeight: 1,

  '&:not(:disabled):hover': {
    boxShadow: '0 0 0 1px $colors$indigo6',
  },
  '&:not(:disabled):focus': {
    boxShadow: '0 0 0 2px $colors$indigo7',
  },
  '&:disabled': {
    backgroundColor: '$gray4',
    cursor: 'not-allowed',
  },
});
