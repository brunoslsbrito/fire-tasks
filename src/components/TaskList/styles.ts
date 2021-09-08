import styled from 'styled-components';

import addLight from '../../assets/icons/addiconlight.svg';
import addDark from '../../assets/icons/addicondark.svg';

import copy from '../../assets/icons/copyicon.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const ListHeaderOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  margin-top: 25px;
  min-width: 700px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
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
  justify-content: space-between;
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
  margin-top: 10px;
    color: ${({ theme }) => theme.colors.neutral600};
`;

export const OtherTitle = styled.h1`

    color: ${({ theme }) => theme.colors.neutral600};
`;

export const CopyTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
  margin-top: 10px;
`;

export const AddItemTitle = styled.h3`
  margin-top: 6px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.neutral400};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 57%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const TagContainer = styled.div`
  display: flex;
  width: 10%;
  min-width: 180px;
  align-items: center;
  justify-content: center;
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const ListTitleContainer = styled.div`
  display: flex;
  min-width: 80px;
  align-items: flex-start; 
  margin-left: 15px;
  margin-top: 5px;
  justify-content: center;
`;

export const CopyButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 180px;
  align-items: center;
  justify-content: center;
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const CopyButtonInnerContainer = styled.div`
  display: flex;
  width: 90%;
  height: 80%;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
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
  background: ${({ theme }) => theme.colors.background};
`;

export const ListFinalBottomContainer = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
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

export const CopyIcon = styled.img.attrs({
  src: copy,
  alt: 'copy',
})`
  height: 25px; 
  width: 25px;
  margin-left: 15px;
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

export const ConvertItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-left: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-right: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const ConvertText = styled.text`
  color: ${({ theme }) => theme.colors.neutral400};
  font-family: 'Nunito Sans';
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 20px;
  white-space: pre-line;
`;
