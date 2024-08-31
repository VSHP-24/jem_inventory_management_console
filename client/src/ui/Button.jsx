import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.5rem;
    padding: 0.1rem 0.5rem;
    font-weight: 600;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-gold-100);
    background-color: var(--color-grey-800);

    &:hover {
      color: var(--color-gold-700);
      background-color: var(--color-grey-900);
    }
  `,
  secondary: css`
    color: var(--color-grey-900);
    background-color: var(--color-grey-300);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-400);
      color: var(--color-grey-900);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
      font-weight: 500;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  text-align: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

export default Button;
