import React, { useCallback, useEffect, useState } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
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
  ItemPlannedContainer,
  ItemPlannedText,
  ListTitleContainer,
  CopyButtonContainer,
  CopyTitle,
  CopyButtonInnerContainer,
  CopyIcon,
  ListFinalBottomContainer,
  ConvertItemContainer, ConvertText, TagContainer, ItemTagContainer, ItemTagText,
} from './styles';

import { Themes } from '../../styles/global';

interface TaskListProps {
  themeType: string;
  convert: boolean;
  squad:string;
}

export enum Planned {
  // eslint-disable-next-line no-unused-vars
  YES = 'Yes',
  // eslint-disable-next-line no-unused-vars
  NO = 'No'
}

interface ListItem {
  tag:string;
  description: string;
  estimate: string;
  planned: Planned;
}

interface HoverProp {
  isHover: boolean;
  index: number;
}

const TaskList: React.FC<TaskListProps> = ({ themeType, convert, squad }) => {
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
    setTaskList([...taskList, {
      tag: taskList.length > 0 && taskList[taskList.length - 1].tag ? taskList[taskList.length - 1].tag : '', description: '', estimate: '00:00', planned: Planned.YES,
    }]);
  }, [taskList]);
  const format = 'HH:mm';
  const onPressDelete = (index: number) => {
    setHover({ isHover: false, index: 0 });
    setTaskList(taskList.filter((_, localIndex) => localIndex !== index));
  };

  const onEditDescription = (index: number) => (e: any) => {
    const newArray = [...taskList];
    newArray[index].description = e.target.value;
    setTaskList(newArray);
  };

  const onEditTag = (index: number) => (e: any) => {
    const newArray = [...taskList];
    newArray[index].tag = e.target.value;
    setTaskList(newArray);
  };

  const onEditEstimate = (index: number) => (value: any) => {
    if (value) {
      const newArray = [...taskList];
      const hour = moment(value).hours();
      const minute = moment(value).minutes();

      newArray[index].estimate = `${hour.toString().length === 1 ? `0${hour.toString()}` : hour.toString()}:${minute.toString().length === 1 ? `0${minute.toString()}` : minute.toString()}`;
      setTaskList(newArray);
    } else {
      const newArray = [...taskList];
      newArray[index].estimate = '00:00';
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
  const filterEstimate = (item: string) => {
    let hours = item.slice(0, 2);
    let minutes = item.slice(3, 5);

    if (hours[0] === '0') hours = item.slice(1, 2);
    if (minutes[0] === '0') minutes = item.slice(4, 5);

    if (minutes[0] === '0') return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const onEditPlanned = (index: number) => {
    const newArray = [...taskList];
    newArray[index].planned = newArray[index].planned === Planned.YES ? Planned.NO : Planned.YES;
    setTaskList(newArray);
  };

  const renderTrash = () => (
    themeType === Themes.LIGHT ? <TrashIconLight /> : <TrashIconDark />
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
      <ItemTagContainer>
        <ItemTagText
          value={taskList[index].tag}
          placeholder="Add Tag"
          onChange={onEditTag(index)}
        />
      </ItemTagContainer>
      <ItemDescriptionContainer>
        <ItemDescriptionText
          value={taskList[index].description}
          placeholder="Add Description"
          onChange={onEditDescription(index)}
        />
      </ItemDescriptionContainer>
      <ItemEstimateContainer>
        <TimePicker
          allowClear
          defaultValue={moment(taskList[index].estimate, format)}
          onChange={onEditEstimate(index)}
          format={format}
        />
      </ItemEstimateContainer>
      <ItemPlannedContainer>
        <ItemPlannedText onClick={() => onEditPlanned(index)}>
          {taskList[index].planned}
        </ItemPlannedText>
      </ItemPlannedContainer>
    </TaskItemContainer>
  );

  const getNextLine = (item: ListItem) => (
    `- [ ${item.tag} ] ${item.description} / estimate:"${filterEstimate(item.estimate)}" assignee:"Unassigned" cfield:"SQUAD:${squad}" cfield:"Tipo de Subtask:DEV" cfield:"Fora do Compromisso:${item.planned === Planned.YES ? 'Não' : 'Sim'}"`
  );

  const renderList = () => (
    <>
      <ListHeaderOutContainer>
        <ListHeaderContainer>
          <NumberContainer />
          <TagContainer>
            <Title>Tag</Title>
          </TagContainer>
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
                themeType === Themes.LIGHT
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
