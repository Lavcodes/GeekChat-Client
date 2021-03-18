import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`

  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #300d2a;
  border-radius : 5px;
`;
const IconStyle = styled.div`
padding : 0.5em;
margin: 0.5em;
`;
const SideBar= () => (
    <SideBarWrapper>
        <IconStyle>
        <Icon inverted color='grey' name="user"size='huge'/>
        </IconStyle>
        <br/>
        <IconStyle>
        <Icon inverted color='grey' name="search"size='huge'/>
        </IconStyle>
      
    </SideBarWrapper>
  );
  export default SideBar;