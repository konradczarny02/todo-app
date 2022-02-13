import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  div {
    display: flex;
    height: 48px;
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  div:first-child,
  div:nth-child(2) {
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
  }

  p:hover {
    color: ${({ theme }) => theme.textHover};
  }

  div:first-child {
    flex-basis: 50%;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 355px) {
      padding-left: 20px;
    }
    @media (min-width: 700px) {
      flex-basis: calc(100% / 3);
    }
  }

  div:nth-child(2) {
    flex-basis: 50%;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    @media (min-width: 355px) {
      padding-right: 20px;
    }
    @media (min-width: 700px) {
      flex-basis: calc(100% / 3);
      order: 3;
    }
  }

  div:last-child {
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.textSecondary};

    p {
      margin: 0 10px;
    }

    @media (min-width: 700px) {
      flex-basis: calc(100% / 3);
      margin: 0;
      order: 2;
    }
  }
`;
