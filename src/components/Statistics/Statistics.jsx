import styled from 'styled-components';
import PropTypes from 'prop-types'


const Option = styled.p`
  text-transform: capitalize;
`;
const Span = styled.span`
  font-weight: bold;
`;

export const Statistics = ({ options, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveFeedbackPercentage = positivePercentage();
  const optionArray = [];
  for (const option in options) {
    optionArray.push(
      <Option key={option}>
        <Span>{option}:</Span> {options[option]}{' '}
      </Option>
    );
  }
  return (
    <>
      {optionArray}
      <Option>
        <Span>Total:</Span> {totalFeedback}
      </Option>
      <Option>
        <Span>Positive feedback:</Span> {positiveFeedbackPercentage}%
      </Option>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
