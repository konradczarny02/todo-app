import styled from 'styled-components';

export const CompleteButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: transparent;
  margin-right: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${({ completed }) => (completed ? 'none' : '#C058F3')};
  }

  svg {
    z-index: ${({ completed }) => (completed ? '2' : '-2')};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(85, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 100%);
    border-radius: 50%;
    z-index: ${({ completed }) => (completed ? '1' : '-1')};
  }
`;
