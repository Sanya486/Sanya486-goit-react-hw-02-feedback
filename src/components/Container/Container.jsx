import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 100px auto;
  width: 500px;
  border: 1px dashed black;
  padding: 50px;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
