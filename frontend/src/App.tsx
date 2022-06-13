import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import themes from './assets/styles/themes';

import GlobalStyles from './assets/styles/global';

function App() {
  const [theme] = useState('light');

  const currentTheme = useMemo(() => (
    themes[theme as keyof typeof themes] || themes.light
  ), [theme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />

        <AppRoutes />
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
