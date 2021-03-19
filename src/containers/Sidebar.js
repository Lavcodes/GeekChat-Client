import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
import decode from 'jwt-decode';

import SubChannels from '../components/SubChannels';
import Channels from '../components/Channels';

const allChannelsQuery = gql`
  {
    allChannels {
      id
      channelname
    }
  }
`;

const Sidebar = ({currentChannelId}) => {
  const { loading, error, data } = useQuery(allChannelsQuery);
  if (loading) {
    return null;
  }
  if (error) console.log(data);
  const {allChannels} = data;
  const channelIdx = _.findIndex(allChannels, (['id',parseInt(currentChannelId, 10)]));
  const channel = allChannels[channelIdx];
  
  let username = '';
  try {
    const token = localStorage.getItem('token');
    const { user } = decode(token);
    // eslint-disable-next-line prefer-destructuring
    username = user.username;
  } catch (err) {}

  return [
    <Channels
    key="channel-sidebar"
    channels={allChannels.map(c=>({
        id:c.id,
        letter: c.channelname.charAt(0).toUpperCase(),
    }))}
   >
   </Channels>,
    <SubChannels
     channelName = {channel.channelname}
     username={username}
     SubFields={[{id:1, name:"general"},
     {id:2, name:"discussions"},
     {id:3, name:"events"},
     {id:4, name:"pinned"},
    ]}
    users={[
        {id:1, name:"Bob"},
        {id:2, name:"John"},
        {id:3, name:"Alice"},
        {id:4, name:"Max"}
    ]}
    />,
  ];
};
export default Sidebar;