import React, { useCallback, useState } from 'react';
import {
  AddIconDark,
  AddIconLight,
  AddItemContainer,
  AddItemTitle,
  Container,
  DescriptionContainer,
  EstimateContainer,
  ListBottomContainer,
  ListHeaderOutContainer,
  ListHeaderContainer,
  NumberContainer,
  PlannedContainer,
  Title,
  ListContainer,
  TaskItemContainer,
  TaskItemNumberContainer,
  TaskItemNumberText,
  TrashIconLight,
  TrashIconDark,
  ItemDescriptionContainer,
  ItemDescriptionText, ItemEstimateContainer, ItemEstimateText, ItemEstimateText2,
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

interface HoverProp {
  isHover: boolean;
  index: number;
}

const TaskList: React.FC<TaskListProps> = ({ theme }) => {
  const [taskList, setTaskList] = useState<Array<ListItem>>([]);
  const [isHover, setHover] = useState<HoverProp>({ isHover: false, index: 0 });

  const onPressAdd = useCallback(() => {
    setTaskList([...taskList, { description: '', estimate: '', planned: 'Yes' }]);
  }, [taskList]);

  const onPressDelete = (index: number) => {
    setHover({ isHover: false, index: 0 });
    setTaskList(taskList.filter((_, localIndex) => localIndex !== index));
  };

  const onEditDescription = (index: number) => (e: any) => {
    const newArray = [...taskList];
    newArray[index].description = e.target.value;
    setTaskList(newArray);
  };

  const onEditEstimate = (index: number) => (e: any) => {
    if (e.target.validity.valid && e.target.value.length < 3) {
      const newArray = [...taskList];
      const newValue = e.target.value.replace('h', '');
      newArray[index].estimate = newValue;
      setTaskList(newArray);
    }
  };

  const renderTrash = () => (
    theme === Themes.LIGHT
      ? <TrashIconLight />
      : <TrashIconDark />
  );

  const renderItem = (item: ListItem, index: number) => (
    <TaskItemContainer key={index}>
      <TaskItemNumberContainer
        onClick={() => onPressDelete(index)}
        onPointerOver={() => setHover({ isHover: true, index })}
        onPointerLeave={() => setHover({ isHover: false, index: 0 })}
      >
        { isHover.isHover && isHover.index === index
          ? (renderTrash()) : (
            <TaskItemNumberText>
              {index + 1}
            </TaskItemNumberText>
          )}
      </TaskItemNumberContainer>
      <ItemDescriptionContainer>
        <ItemDescriptionText
          value={taskList[index].description}
          placeholder="Add Description"
          onChange={onEditDescription(index)}
        />
      </ItemDescriptionContainer>
      <ItemEstimateContainer>
        <ItemEstimateText
          value={taskList[index].estimate}
          onChange={onEditEstimate(index)}
          placeholder="0h"
          type="text"
          pattern="[0-9]*"
        />
        {
          taskList[index].estimate.length > 0
          && (<ItemEstimateText2>h</ItemEstimateText2>)
        }
      </ItemEstimateContainer>
    </TaskItemContainer>
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
