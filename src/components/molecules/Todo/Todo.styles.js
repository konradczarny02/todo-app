import styled from 'styled-components';

export const TodoWrapper = styled.li`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  list-style: none;
  padding: 0 25px;

  p {
    font-size: 12px;
    color: ${({ theme, completed }) => (completed ? theme.textCompleted : theme.text)};
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  }

  svg {
    margin-left: auto;
  }
`;
