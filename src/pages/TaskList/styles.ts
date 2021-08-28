import styled from 'styled-components';

import addLight from '../../assets/icons/addiconlight.svg';
import addDark from '../../assets/icons/addicondark.svg';

import trashLight from '../../assets/icons/trashlight.svg';
import trashDark from '../../assets/icons/trashdark.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ListHeaderOutContainer = styled.div`
  display: flex;
  width: 96%;
  margin-top: 25px;
  min-width: 700px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.secondary}`}; 
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`}; 
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`}; 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px; 
`;

export const ListHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.neutral100};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px;

`;

export const ListContainer = styled.div`
  display: flex;
  width: 96%;
  min-width: 700px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`}; 
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  flex-direction: column;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.neutral600};
`;

export const AddItemTitle = styled.h3`
  margin-left: 10px;
    color: ${({ theme }) => theme.colors.neutral400};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 67%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const EstimateContainer = styled.div`
  display: flex;
  width: 15%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const PlannedContainer = styled.div`
  display: flex;
  width: 15%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
`;

export const NumberContainer = styled.div`
  display: flex;
  width: 3%;
  min-width: 30px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const ListBottomContainer = styled.div`
  display: flex;
  height: 50px;
  width: 96%;
  min-width: 700px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
  align-items: center;
`;

export const AddItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  width: 150px;
  margin-left: 5px;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;

export const AddIconLight = styled.img.attrs({
  src: addLight,
  alt: 'addLight',
})`
  height: 25px; 
  width: 25px;
  margin-left: 12px;
  
`;

export const AddIconDark = styled.img.attrs({
  src: addDark,
  alt: 'addDark',
})`
  height: 25px; 
  width: 25px;
  margin-left: 12px;
`;

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const TaskItemNumberText = styled.h2`
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
