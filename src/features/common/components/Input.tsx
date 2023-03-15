import { styled } from '../../../stitches.config';

export const inputStyles = {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  fontSize: '15px',
  color: '$gray12',
  boxShadow: `0 0 0 1px $colors$gray8`,
  '&:hover': {
    boxShadow: '0 0 0 1px $colors$indigo6',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$indigo7',
  },
  '&:selection': {
    backgroundColor: '$indigo8',
    color: '$gray12',
  },
};

export const Input = styled('input', {
  ...inputStyles,

  padding: '0 10px',
  height: '35px',
  lineHeight: 1,
});
