import React from 'react';
import { useSelector } from 'react-redux';
import { TodoListWrapper } from 'components/organisms/TodoList/TodoList.styles';
import Todo from 'components/molecules/Todo/Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <Todo data={todo} key={todo.id} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
