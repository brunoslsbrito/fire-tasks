import React, { useCallback, useEffect, useState } from 'react';

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
  ItemDescriptionText,
  ItemEstimateContainer,
  ItemEstimateText,
  ItemEstimateTextAdditive,
  ItemPlannedContainer,
  ItemPlannedText,
  ListTitleContainer,
  CopyButtonContainer,
  CopyTitle,
  CopyButtonInnerContainer,
  CopyIcon,
  ListFinalBottomContainer,
  ConvertItemContainer, ConvertText,
} from './styles';

import { Themes } from '../../styles/global';

interface TaskListProps {
  theme: string;
  convert: boolean;
}

export enum Planned {
  // eslint-disable-next-line no-unused-vars
  YES = 'Yes',
  // eslint-disable-next-line no-unused-vars
  NO = 'No'
}

interface ListItem {
  description: string;
  estimate: string;
  planned: Planned;
}

interface HoverProp {
  isHover: boolean;
  index: number;
}

const TaskList: React.FC<TaskListProps> = ({ theme, convert }) => {
  const [taskList, setTaskList] = useState<Array<ListItem>>([]);
  const [isHover, setHover] = useState<HoverProp>({ isHover: false, index: 0 });
  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    let text = '';
    // eslint-disable-next-line @typescript-eslint/no-use-before-define,no-return-assign
    taskList.map((item) => text += `${getNextLine(item)}\n`);
    setFinalText(text);
  }, [convert]);

  const onPressAdd = useCallback(() => {
    setTaskList([...taskList, { description: '', estimate: '', planned: Planned.YES }]);
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

  const onPressCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalText);
      alert('Copied');
    } catch (e) {
      alert('Error trying copy text');
    }
  };

  // eslint-disable-next-line no-nested-ternary
  const filterEstimate = (item: string) => (item.length > 1 ? (
    item[0] === '0' ? item.slice(1, 2) : item
  ) : item);

  const onEditPlanned = (index: number) => {
    const newArray = [...taskList];
    newArray[index].planned = newArray[index].planned === Planned.YES ? Planned.NO : Planned.YES;
    setTaskList(newArray);
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
          && (<ItemEstimateTextAdditive>h</ItemEstimateTextAdditive>)
        }
      </ItemEstimateContainer>
      <ItemPlannedContainer>
        <ItemPlannedText onClick={() => onEditPlanned(index)}>
          {taskList[index].planned}
        </ItemPlannedText>
      </ItemPlannedContainer>
    </TaskItemContainer>
  );

  const getNextLine = (item: ListItem) => (
    `- [DEV APP] ${item.description} / estimate:"${filterEstimate(item.estimate)}h" assignee:"Unassigned" cfield:"SQUAD:SQUAD_BILLIONS" cfield:"Tipo de Subtask:DEV" cfield:"Fora do Compromisso:${item.planned === Planned.YES ? 'Não' : 'Sim'}"`
  );

  const renderList = () => (
    <>
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
    </>
  );

  const renderConverted = () => (
    <>
      <ListHeaderOutContainer>
        <ListHeaderContainer>
          <ListTitleContainer>
            <Title>List</Title>
          </ListTitleContainer>
          <CopyButtonContainer>
            <CopyButtonInnerContainer onClick={onPressCopy}>
              <CopyIcon />
              <CopyTitle>Copy</CopyTitle>
            </CopyButtonInnerContainer>
          </CopyButtonContainer>
        </ListHeaderContainer>
        <ConvertItemContainer>
          <ConvertText>
            {finalText}
          </ConvertText>
        </ConvertItemContainer>
        <ListFinalBottomContainer />
      </ListHeaderOutContainer>
    </>
  );

  return (
    <Container>
      {convert ? renderConverted() : renderList()}
    </Container>
  );
};

export default TaskList;
