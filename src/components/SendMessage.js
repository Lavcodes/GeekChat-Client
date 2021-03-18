import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const SendMessageWrapper = styled.div`
  grid-column: 3;
  grid-row: 3;
  margin: 20px;
`;

const SendMessage= () => (
  <SendMessageWrapper>
    <Input fluid placeholder="Type a Message" />
  </SendMessageWrapper>
);
export default SendMessage;