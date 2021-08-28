import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/header';
import GlobalStyle, { Themes } from '../../styles/global';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const Home: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => (
    theme.title === Themes.LIGHT ? setTheme(dark) : setTheme(light)), [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
