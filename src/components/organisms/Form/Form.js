import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titleInput">
        <input id="titleInput" type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
    </form>
  );
};

export default Form;
