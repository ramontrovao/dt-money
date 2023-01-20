import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background-color: ${theme["gray-900"]};
      color: ${theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${theme["gray-500"]};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      padding: 1rem;
      border: 0;
      background-color: transparent;
      border: 1px solid ${theme["green-300"]};
      color: ${theme["green-300"]};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background-color: ${theme["green-500"]};
        border: 1px solid ${theme["green-500"]};
        color: ${theme["white"]};
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
    }
  `}
`;
