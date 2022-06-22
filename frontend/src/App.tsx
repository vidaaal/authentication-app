import { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import themes from './assets/styles/themes';

import GlobalStyles from './assets/styles/global';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [theme] = useState('light');

  const currentTheme = useMemo(() => (
    themes[theme as keyof typeof themes] || themes.light
  ), [theme]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyles />

          <AppRoutes />
        </ThemeProvider>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
