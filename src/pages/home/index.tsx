import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LeftBar from '../../components/LeftBar';
import TaskList from '../../components/TaskList';
import GlobalStyle, { Themes } from '../../styles/global';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import {
  BackgroundDark,
  BackgroundLight, BlockMessage,
  ButtonTitle,
  Container,
  ConvertButton,
  EditButton,
  InputContainer,
  ItemEstimateText,
  RightContainer,
  Title,
  TitleContainer,
  TitleOutContainer,
} from './styles';

const Home: React.FC = () => {
  const [canConvert, setConvertState] = useState(true);
  const [squad, setSquad] = useState(() => {
    const localSquad = localStorage.getItem('@squad_name');
    if (localSquad) {
      if (localSquad.length > 30) {
        return '';
      }
      return localSquad;
    }
    return '';
  });
  const [theme, setTheme] = useState(light);
  const [convert, setConvert] = useState(false);

  useEffect(() => {
    localStorage.setItem('@squad_name', squad);
  }, [squad]);

  const toggleTheme = useCallback(() => (
    theme.title === Themes.LIGHT ? setTheme(dark) : setTheme(light)), [theme]);

  const toggleConvert = useCallback(() => (
    convert ? setConvert(false) : setConvert(true)), [convert]);

  const onEditSquad = (e: any) => {
    setSquad(e.target.value);
  };

  useEffect(() => {
    if (squad.length > 0) {
      setConvertState(true);
    }
  }, [squad]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <LeftBar toggleTheme={toggleTheme} />
        {theme.title === Themes.LIGHT ? <BackgroundLight /> : <BackgroundDark /> }
        <TitleOutContainer>
          <TitleContainer>
            <Title>Task Manager</Title>
            <RightContainer>
              <InputContainer canConvert={canConvert}>
                <ItemEstimateText
                  value={squad}
                  placeholder="Add Squad Name"
                  onChange={onEditSquad}
                />
                {!canConvert && <BlockMessage>Add a Squad Name</BlockMessage>}
              </InputContainer>

              {convert
                ? (
                  <EditButton onClick={toggleConvert} convert={convert}>
                    <ButtonTitle inverted={convert}> Edit </ButtonTitle>
                  </EditButton>
                )
                : (
                  <ConvertButton
                    onClick={
                    () => (squad.length === 0
                      ? setConvertState(false)
                      : toggleConvert())
                    }
                    convert={convert}
                  >
                    <ButtonTitle> Convert </ButtonTitle>
                  </ConvertButton>
                )}
            </RightContainer>
          </TitleContainer>
          <TaskList
            themeType={
                theme.title === Themes.LIGHT
                  ? Themes.LIGHT
                  : Themes.DARK
            }
            convert={convert}
            squad={squad}
          />
        </TitleOutContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
