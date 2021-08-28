import styled from 'styled-components';

interface ContainerProps {
    width: number;
    height: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background: black;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px; 
`;
