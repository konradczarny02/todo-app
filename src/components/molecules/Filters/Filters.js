import React from 'react';
import { FilterWrapper } from 'components/molecules/Filters/Filters.styles';
import { useDispatch } from 'react-redux';
import { todosSlice } from 'store/todoSlice';

const Filters = ({ handleChangeFilter, items }) => {
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <div>
        <p>{items} items left</p>
      </div>
      <div>
        <p onClick={() => dispatch(todosSlice.actions.clearCompleted())}>Clear Completed</p>
      </div>
      <div>
        <p onClick={(event) => handleChangeFilter(event)}>All</p>
        <p onClick={(event) => handleChangeFilter(event)}>Active</p>
        <p onClick={(event) => handleChangeFilter(event)}>Completed</p>
      </div>
    </FilterWrapper>
  );
};

export default Filters;
