import { styled } from './stitches.config';
import { MainTemplate } from './features/main/templates/MainTemplate';
import { globalStyles } from './stitches.config';

export const App = () => {
  globalStyles();

  return (
    <>
      <Header>Board</Header>
      <MainWrapper>
        <MainTemplate />
      </MainWrapper>
    </>
  );
};

const Header = styled('header', {
  padding: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '$indigo12',
});

const MainWrapper = styled('main', {
  padding: 16,
});
