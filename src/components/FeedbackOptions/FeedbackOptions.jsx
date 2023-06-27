import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Button = styled.button`
  text-transform: capitalize;
  display: flex;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsEl = options.map((option, index) => (
    <Button key={index} type="button" onClick={onLeaveFeedback}>
      {option}
    </Button>
  ));
  return <ButtonWrapper>{buttonsEl}</ButtonWrapper>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
