import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 4px;
  padding: 0 25px;

  @media (min-width: 700px) {
    margin-top: 48px;
  }

  label {
    width: 80%;
  }

  input {
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: ${({ theme }) => theme.inputTyping};
    width: 100%;
  }

  input::placeholder {
    font-size: 12px;
    color: ${({ theme }) => theme.input};
  }

  input:focus {
    outline: none;
  }
`;
