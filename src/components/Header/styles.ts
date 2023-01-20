import styled from "styled-components";
import { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background-color: ${theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
  `}
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 3.125rem;
    border: 0;
    background-color: ${theme["green-500"]};
    color: ${theme["white"]};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: ${theme["green-700"]};
      transition: background-color 0.2s;
    }
  `}
`;
