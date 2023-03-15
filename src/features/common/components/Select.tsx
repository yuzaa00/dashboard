import { styled } from '../../../stitches.config';

export const Select = styled('select', {
  all: 'unset',
  boxSizing: 'border-box',
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  appearance: 'none',
  color: '$gray12',
  fontSize: '15px',
  width: '100%',
  boxShadow: '0 0 0 1px $colors$gray8',
  padding: '0 15px',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  backgroundPosition: 'right 0 center',
  borderRadius: '4px',
  height: '35px',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.3962 14.4853C12.1961 14.7453 11.8039 14.7453 11.6038 14.4853L9.15559 11.305C8.90249 10.9762 9.13687 10.5 9.55179 10.5H14.4482C14.8631 10.5 15.0975 10.9762 14.8444 11.305L12.3962 14.4853Z' fill='%23222222'/%3E%3C/svg%3E%0A\");",
  backgroundRepeat: 'no-repeat',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$indigo6',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$indigo7',
  },
});
