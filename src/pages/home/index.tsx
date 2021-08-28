import React, { useEffect, useState } from 'react';
import { Container, HeaderContainer } from './styles';

const Home: React.FC<any> = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  // const [taskList, setTaskList] = useState([]);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Container width={width} height={height}>
      <HeaderContainer />
    </Container>
  );
};

export default Home;
