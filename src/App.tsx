import { styled } from './stitches.config';
import { MainTemplate } from './features/main/templates/MainTemplate';
import { globalStyles } from './stitches.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Header>Board</Header>
      <MainWrapper>
        <MainTemplate />
      </MainWrapper>
    </QueryClientProvider>
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
