import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  display: flex;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonsEl = options.map(option => (
    <Button type="button" onClick={onLeaveFeedback}>
      {option}
    </Button>
  ));
  return <ButtonWrapper>{buttonsEl}</ButtonWrapper>;
};

