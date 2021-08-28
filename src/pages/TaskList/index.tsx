import React, { useCallback, useState } from 'react';
import {
  AddIconDark,
  AddIconLight,
  AddItemContainer, AddItemTitle,
  Container,
  DescriptionContainer,
  EstimateContainer,
  ListBottomContainer,
  ListHeaderOutContainer,
  ListHeaderContainer,
  NumberContainer,
  PlannedContainer,
  Title, ListContainer,
} from './styles';

import { Themes } from '../../styles/global';

interface TaskListProps {
  theme: string;
}

interface ListItem {
  description: string;
  estimate: string;
  planned: string;
}

const TaskList: React.FC<TaskListProps> = ({ theme }) => {
  const [taskList, setTaskList] = useState<Array<ListItem>>([]);

  const onPressAdd = useCallback(() => {
    setTaskList([...taskList, { description: '', estimate: '', planned: '' }]);
  }, [taskList]);

  const renderItem = (item: ListItem, index: number) => (
    <h1>
      {item.description}
      {index}
    </h1>
  );

  return (
    <Container>
      <ListHeaderOutContainer>
        <ListHeaderContainer>
          <NumberContainer />
          <DescriptionContainer>
            <Title>Description</Title>
          </DescriptionContainer>
          <EstimateContainer>
            <Title>Estimate</Title>
          </EstimateContainer>
          <PlannedContainer>
            <Title>Planned</Title>
          </PlannedContainer>
        </ListHeaderContainer>
      </ListHeaderOutContainer>
      <ListContainer>
        { taskList.length > 0 && (taskList.map((item, index) => renderItem(item, index)))}
      </ListContainer>
      <ListBottomContainer>
        <AddItemContainer onClick={onPressAdd}>
          {
              theme === Themes.LIGHT
                ? <AddIconLight />
                : <AddIconDark />
            }
          <AddItemTitle> New Task </AddItemTitle>
        </AddItemContainer>
      </ListBottomContainer>
    </Container>
  );
};

export default TaskList;
