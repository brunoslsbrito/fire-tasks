import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  width: 96%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 700px;
`;

export const TitleOutContainer = styled.div`
  display: flex;
  height: 90px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral600};
  font-family: 'Lobster';  

`;

interface ButtonTitleProps {
    inverted?:boolean;
}

export const ButtonTitle = styled.h4<ButtonTitleProps>`
  color: ${({ inverted, theme }) => (inverted ? theme.colors.primary : '#FFFF')}; 
  font-family: 'Nunito Sans';
`;

interface ConvertButtonProps {
    convert: boolean;
}

export const ConvertButton = styled.div<ConvertButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 120px;
  height: 35px;
  border-radius: 10px;
  background: ${({ theme, convert }) => (!convert ? theme.colors.primary : theme.colors.background)};
  border:  ${({ convert, theme }) => convert && `2px solid ${theme.colors.primary}`}; 
  cursor: pointer;
  &:hover {  
    background: ${({ convert }) => !convert && '#BFA150'};  
  }
`;
