import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StatList = styled.div`
  margin: 0 auto;
  max-width: 650px;
  min-width: 315px;
  background-color: #ffcc00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;

  .feedback-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .label {
      font-weight: 700;
      color: #555;
      font-size: 24px;
    }
    .value {
      color: #555;
      font-size: 24px;
      font-weight: 700;
      text-align: right;
    }
  }

  .feedback-stat.total span {
    color: purple;
  }

  .feedback-stat.positive-feedback span {
    color: #47ab5f;
  }

  animation: ${fadeIn} 0.5s ease-in-out;
};
`;