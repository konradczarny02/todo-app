import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TodoListWrapper } from 'components/organisms/TodoList/TodoList.styles';
import Todo from 'components/molecules/Todo/Todo';
import Filters from 'components/molecules/Filters/Filters';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(todos);
  const handleChangeFilter = (event) => setFilter(event.target.textContent);

  useEffect(() => {
    switch (filter) {
      case 'All':
        setFilteredTasks(todos);
        break;
      case 'Active':
        setFilteredTasks(todos.filter((todo) => todo.completed === false));
        break;
      case 'Completed':
        setFilteredTasks(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilteredTasks(todos);
        break;
    }
  }, [filter, todos]);

  return (
    <>
      <TodoListWrapper>
        {filteredTasks.map((todo) => (
          <Todo data={todo} key={todo.id} />
        ))}
      </TodoListWrapper>
      <Filters handleChangeFilter={handleChangeFilter} items={filteredTasks.length} />
    </>
  );
};

export default TodoList;
