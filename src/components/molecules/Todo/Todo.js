import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { TodoWrapper } from 'components/molecules/Todo/Todo.styles';
import { ReactComponent as DeleteIcon } from 'assets/images/deleteIcon.svg';

const Todo = ({ data: { title, id, completed } }) => {
  return (
    <TodoWrapper completed={completed}>
      <Button onClick={(event) => console.log(event.target)} />
      <p>{title}</p>
      <DeleteIcon />
    </TodoWrapper>
  );
};

export default Todo;
