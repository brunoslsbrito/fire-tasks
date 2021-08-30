import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/header';
import TaskList from '../../components/TaskList';
import GlobalStyle, { Themes } from '../../styles/global';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import {
  ButtonTitle,
  ConvertButton,
  Title,
  TitleContainer, TitleOutContainer,
} from './styles';

const Home: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const [convert, setConvert] = useState(false);

  const toggleTheme = useCallback(() => (
    theme.title === Themes.LIGHT ? setTheme(dark) : setTheme(light)), [theme]);

  const toggleConvert = useCallback(() => (
    convert ? setConvert(false) : setConvert(true)), [convert]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <TitleOutContainer>
          <TitleContainer>
            <Title>Task Manager</Title>
            <ConvertButton onClick={toggleConvert} convert={convert}>
              {convert
                ? <ButtonTitle inverted> Edit </ButtonTitle>
                : <ButtonTitle> Convert </ButtonTitle>}
            </ConvertButton>
          </TitleContainer>
        </TitleOutContainer>
        <TaskList theme={theme.title} convert={convert} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
