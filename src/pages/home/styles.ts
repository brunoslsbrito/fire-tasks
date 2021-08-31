import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 700px;
  margin-top: 25px;
`;

export const TitleOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral600};
  font-family: 'Lobster';
  margin-left: 30px;
`;

interface ButtonTitleProps {
    inverted?:boolean;
}

export const ButtonTitle = styled.h4<ButtonTitleProps>`
  color: ${({ inverted, theme }) => (inverted ? theme.colors.primary : '#FFFF')}; 
  font-family: 'Nunito Sans'; font-size: 20px;
  margin-top: 10px;
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
  background: linear-gradient(90deg,#FD8F0A,#EC3F3E,#E21478);
  border:  ${({ convert, theme }) => convert && `2px solid ${theme.colors.primary}`}; 
  cursor: pointer;
  &:hover {  
    background: ${({ convert }) => !convert && '#E21478'};  
  }
`;

export const ItemEstimateText = styled.input`
  color: ${({ theme }) => theme.colors.neutral400};
  width: 90%;
  height: 80%; 
  border: none;
  font-family: 'Nunito Sans';
  font-size: 20px;
  outline: none;
  background: ${({ theme }) => theme.colors.neutral100};
  text-align: center;
  margin-left: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 35px;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  height: 35px;
  background: ${({ theme }) => theme.colors.neutral100};
  margin-right: 30px; 
  border-radius: 10px;
  border:  ${({ theme }) => `2px solid ${theme.colors.secondary}`};
`;

export const EditButton = styled.div<ConvertButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 35px; 
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.neutral800};
  border:  2px solid #E21478; 
  cursor: pointer;
  &:hover {  
    background: ${({ convert }) => !convert && '#E21478'};  
  }
`;
