import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LeftBar from '../../components/LeftBar';
import TaskList from '../../components/TaskList';
import GlobalStyle, { Themes } from '../../styles/global';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import {
  ButtonTitle,
  Container,
  ConvertButton,
  EditButton,
  Title,
  TitleContainer,
  TitleOutContainer,
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
      <Container>
        <GlobalStyle />
        <LeftBar toggleTheme={toggleTheme} />
        <TitleOutContainer>
          <TitleContainer>
            <Title>Task Manager</Title>
            {convert
              ? (
                <EditButton onClick={toggleConvert} convert={convert}>
                  <ButtonTitle inverted={convert}> Edit </ButtonTitle>
                </EditButton>
              )
              : (
                <ConvertButton onClick={toggleConvert} convert={convert}>
                  <ButtonTitle> Convert </ButtonTitle>
                </ConvertButton>
              )}
          </TitleContainer>
          <TaskList themeType={theme.title} convert={convert} squad="SQUAD_BILLIONS" />
        </TitleOutContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
