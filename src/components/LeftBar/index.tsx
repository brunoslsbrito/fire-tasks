import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Container,
  GithubIcon,
  IconButton,
  IconsContainer,
  LogoImage,
  MoonIcon,
  SunIcon,
} from './styles';
import { Themes } from '../../styles/global';

interface LeftBarProps {
  toggleTheme(): void;
}

const LeftBar: React.FC<LeftBarProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  const onClickGithub = () => {
    window.open('https://github.com/leongdev/billions-task-manager', '_blank');
  };

  return (
    <Container>
      <LogoImage />
      <IconsContainer>
        <IconButton onClick={toggleTheme}>
          {title === Themes.LIGHT ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        <IconButton onClick={onClickGithub}>
          <GithubIcon />
        </IconButton>
      </IconsContainer>
    </Container>
  );
};

export default LeftBar;
