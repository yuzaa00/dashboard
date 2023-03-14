import { styled } from '@stitches/react';
import { globalStyles } from './globalStyles';

export const App = () => {
  globalStyles();

  return <Header>Hello world</Header>;
};

const Header = styled('div', {
  fontSize: '20px',
  fontWeight: 'bold',
});
