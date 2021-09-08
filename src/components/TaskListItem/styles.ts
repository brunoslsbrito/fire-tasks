import styled from 'styled-components';

import trashLight from '../../assets/icons/trashlight.svg';
import trashDark from '../../assets/icons/trashdark.svg';

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  background: ${({ theme }) => theme.colors.background};
`;

export const TaskItemNumberText = styled.h2`
margin-top: 10px;
  color: ${({ theme }) => theme.colors.neutral400};
`;

export const TaskItemNumberContainer = styled.div`
  height: 50px;
  display: flex;
  width: 3%; 
  min-width: 30px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;

export const TrashIconLight = styled.img.attrs({
  src: trashLight,
  alt: 'trashLight',
})`
  height: 25px; 
  width: 25px;
`;

export const TrashIconDark = styled.img.attrs({
  src: trashDark,
  alt: 'trashDark',
})`
  height: 25px; 
  width: 25px;
`;

export const ItemDescriptionContainer = styled.div`
  height: 50px;
  display: flex;
  width: 57%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const ItemTagContainer = styled.div`
  height: 50px;
  display: flex;
  width: 10%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  background: ${({ theme }) => theme.colors.background};
`;

export const ItemDescriptionText = styled.input`
  color: ${({ theme }) => theme.colors.neutral400};
  width: 98%;
  height: 80%; 
  border: none;
  font-family: 'Nunito Sans';
  font-size: 20px;
  outline: none;
  background: ${({ theme }) => theme.colors.background};
`;

export const ItemTagText = styled.input`
  color: ${({ theme }) => theme.colors.neutral400};
  width: 98%;
  height: 80%; 
  border: none;
  font-family: 'Nunito Sans';
  font-size: 20px;
  outline: none;
  background: ${({ theme }) => theme.colors.background};
  margin-left: 10px;
`;

export const ItemEstimateText = styled.input`
  color: ${({ theme }) => theme.colors.neutral400};
  width: 18%;
  height: 80%; 
  border: none;
  font-family: 'Nunito Sans';
  font-size: 20px;
  outline: none;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const ItemEstimateTextAdditive = styled.text`
  color: ${({ theme }) => theme.colors.neutral400};
  font-family: 'Nunito Sans';
  font-size: 20px; 
  margin-left: -5px;
`;

export const ItemPlannedText = styled.text`
  color: ${({ theme }) => theme.colors.neutral400};
  font-family: 'Nunito Sans';
  font-size: 20px; 
  margin-left: -5px;
  width: 65px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.neutral400};
  }
`;

export const ItemEstimateContainer = styled.div`
  height: 50px;
  display: flex;
  width: 15%;

  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const ItemPlannedContainer = styled.div`
  display: flex;
  width: 15%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
`;
