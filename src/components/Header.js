import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  background-color:#958993;
  border-bottom : 4px;
  border-radius :4px;
  padding : 8x;
  margin ; 1px;
  
`;
const HeadStyle = styled.div`
font-weight: bold;
font-size: 1rem;
letter-spacing: 0.25rem;
`;

const Subtext = styled.div`
font-size: 1rem;
text-align: left;
padding : 10px;
`;
const Head= ({ subfield, subtext }) => (
   
        <HeaderWrapper>
    <HeadStyle>#{subfield}</HeadStyle>
    <Subtext>{subtext}</Subtext>
  </HeaderWrapper>
  
   
  
);
export default Head;