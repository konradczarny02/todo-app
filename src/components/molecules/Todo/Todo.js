import React from 'react';
import { useDispatch } from 'react-redux';
import { todosSlice } from 'app/todoSlice';
import { TodoWrapper } from 'components/molecules/Todo/Todo.styles';
import { CompleteButton } from 'components/atoms/CompleteButton/CompleteButton';
import { ReactComponent as CompleteIcon } from 'assets/images/completeIcon.svg';
import { ReactComponent as DeleteIcon } from 'assets/images/deleteIcon.svg';

const Todo = ({ data: { title, id, completed } }) => {
  const dispatch = useDispatch();
  return (
    <TodoWrapper completed={completed}>
      <CompleteButton completed={completed} onClick={() => dispatch(todosSlice.actions.complete(id))}>
        <CompleteIcon />
      </CompleteButton>
      <p>{title}</p>
      <DeleteIcon onClick={() => dispatch(todosSlice.actions.delete(id))} />
    </TodoWrapper>
  );
};

export default Todo;
