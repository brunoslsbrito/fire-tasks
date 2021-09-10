import styled from 'styled-components';

import moon from '../../assets/icons/moonicon.svg';
import sun from '../../assets/icons/sunicon.svg';
import github from '../../assets/icons/githubicon.svg';
import logo from '../../assets/icons/logo.svg';

export const Container = styled.div`
  display: flex;

  width: 70px;
  background: ${({ theme }) => theme.colors.neutral100}; 
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const MoonIcon = styled.img.attrs({
  src: moon,
  alt: 'moon',
})` 

  height: 25px;
  width: 25px;
  margin-left: 12px;
`;

export const SunIcon = styled.img.attrs({
  src: sun,
  alt: 'sun',
})`

  height: 25px;
  width: 25px;
  margin-left: 12px;
`;

export const GithubIcon = styled.img.attrs({
  src: github,
  alt: 'github',
})`

  height: 25px;
  width: 25px;
  margin-left: 12px;
  margin-top: 12px;
`;

export const LogoImage = styled.object.attrs({
  type: 'image/svg+xml',
  data: logo,
})`
  height: 40px;
  width:40px;
  margin-top: 20px;
`;

export const IconButton = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
