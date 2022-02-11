import styled from 'styled-components';

export const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: transparent;
  margin-right: 15px;
`;
