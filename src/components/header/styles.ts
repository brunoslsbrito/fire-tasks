import styled from 'styled-components';

import moon from '../../assets/icons/moonicon.svg';
import sun from '../../assets/icons/sunicon.svg';
import github from '../../assets/icons/githubicon.svg';
import logo from '../../assets/icons/logo.svg';

export const Container = styled.div`
  display: flex;
  height: 50px;
  background: ${({ theme }) => theme.colors.neutral800}; 
  justify-content: space-between;
  flex-direction: row;
`;

export const IconsContainer = styled.div`
  display: flex;
  height: 50px;
  background: ${({ theme }) => theme.colors.neutral800}; 
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 30px;
`;

export const MoonIcon = styled.img.attrs({
  src: moon,
  alt: 'moon',
})`

  height: 25px;
  width: 25px;
  margin-left: 12px;
  margin-top: 12px;
`;

export const SunIcon = styled.img.attrs({
  src: sun,
  alt: 'sun',
})`

  height: 25px;
  width: 25px;
  margin-left: 12px;
  margin-top: 12px;
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

export const LogoImage = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  height: 30px;
  width: 130px;
  margin-left: 30px;
  margin-top: 10px;
`;

export const IconButton = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
