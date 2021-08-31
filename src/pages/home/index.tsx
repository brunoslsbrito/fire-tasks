import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LeftBar from '../../components/LeftBar';
import TaskList from '../../components/TaskList';
import GlobalStyle, { Themes } from '../../styles/global';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import {
  BackgroundDark,
  BackgroundLight,

  ButtonTitle,
  Container,
  ConvertButton,
  EditButton, InputContainer, ItemEstimateText, RightContainer,
  Title,
  TitleContainer,
  TitleOutContainer,
} from './styles';

const Home: React.FC = () => {
  const [squad, setSquad] = useState('');
  const [theme, setTheme] = useState(light);
  const [convert, setConvert] = useState(false);

  const toggleTheme = useCallback(() => (
    theme.title === Themes.LIGHT ? setTheme(dark) : setTheme(light)), [theme]);

  const toggleConvert = useCallback(() => (
    convert ? setConvert(false) : setConvert(true)), [convert]);

  const onEditSquad = (e: any) => {
    setSquad(e.target.value);
  };

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
              <InputContainer>
                <ItemEstimateText
                  placeholder="Add Squad Name"
                  onChange={onEditSquad}
                />
              </InputContainer>
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
            </RightContainer>
          </TitleContainer>
          <TaskList themeType={theme.title} convert={convert} squad={squad} />
        </TitleOutContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
