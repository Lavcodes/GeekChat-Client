import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
import decode from 'jwt-decode';

import SubChannels from '../components/SubChannels';
import Channels from '../components/Channels';
import InvitePeopleModal from '../components/InvitePeopleModal';
import SendMessage from '../components/SendMessage';
import MessageContainer from '../containers/MessageContainer';

const getUserQuery = gql`
  {
    getUser {
      id
      username
      email
      channels{
        id
        channelname
      }
     
    }
  }
`;

const Sidebar = ({currentChannelId}) => {
  const [openInvitePeopleModal, setOpenInvitePeopleModal]= useState(false);
  const handleInvitePeopleClick = () => {
   setOpenInvitePeopleModal(true);
  };

  const handleCloseInvitePeopleModal = () => {
    setOpenInvitePeopleModal(false);
  };

  const { loading, error, data } = useQuery(getUserQuery);
  if (loading) {
    return null;
  }
  if (error) console.log(error);
  if(data) console.log(data)
  const { channels } = data.getUser;
  
  const channelIdx = currentChannelId?_.findIndex(channels, (['id',parseInt(currentChannelId, 10)])):0;
  const channel = channels[channelIdx];
  
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
    channels={channels.map(c=>({
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
    onInvitePeopleClick={handleInvitePeopleClick}
    />,
    <InvitePeopleModal
        channel_id={channel.id}
        onClose={handleCloseInvitePeopleModal}
        open={openInvitePeopleModal}
        key="invite-people-modal"
      />,
      <MessageContainer channelId={channel.id}></MessageContainer> ,
      <SendMessage channelId={channel.id}/>,
      
  ];
};
export default Sidebar;