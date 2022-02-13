import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todosSlice } from 'store/todoSlice';
import { FormWrapper } from 'components/organisms/Form/Form.styles';
import { Button } from 'components/atoms/Button/Button';

const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    dispatch(todosSlice.actions.add(value));
    setValue('');
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Button type="submit" />
      <label htmlFor="titleInput">
        <input
          id="titleInput"
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </label>
    </FormWrapper>
  );
};

export default Form;
