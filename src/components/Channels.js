import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SideBarWrapper = styled.div`

  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #300d2a;
  border-radius : 5px;
`;

const IconStyle = styled.div`
padding : 0.5em;
margin: 0.5em;
&:hover {
    border-style: solid;
    border-width: thick;
    border-color: #767676;
  }
`;


const ChannelList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`;

const ChannelListItem = styled.li`
  height: 50px;
  width: 50px;
  background-color: #676066;
  color: #fff;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 11px;
  &:hover {
    border-style: solid;
    border-width: thick;
    border-color: #767676;
  }
`;

const channel = ({ id, letter }) =><Link to={`/view-channel/${id}`}> <ChannelListItem key={`channel-${id}`}>{letter}</ChannelListItem> </Link> ;


const Channels= ({channels}) => (
    <SideBarWrapper>
        <IconStyle>
        <Icon inverted color='grey' name="user"size='huge'/>
        </IconStyle>
        <br/>
        <IconStyle>
        <Icon inverted color='grey' name="search"size='huge'/>
        </IconStyle>
        <br/>
        <ChannelList>{channels.map(channel)}</ChannelList>
    </SideBarWrapper>
  );
  
  export default Channels;