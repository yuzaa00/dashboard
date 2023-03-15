import { styled } from './stitches.config';
import { MainTemplate } from './features/main/templates/MainTemplate';
import { globalStyles } from './stitches.config';

export const App = () => {
  globalStyles();

  return (
    <>
      <Header>board</Header>
      <MainWrapper>
        <MainTemplate />
      </MainWrapper>
    </>
  );
};

const Header = styled('div', {
  fontSize: '20px',
  fontWeight: 'bold',
});

const MainWrapper = styled('main', {
  padding: 16,
});
