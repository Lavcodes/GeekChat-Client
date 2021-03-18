import React from 'react';
import Channels from '../components/Channels';
import Head from '../components/Header';
import AppLayout from '../components/AppLayout';
import Messages from '../components/Messages';
import SideBar from '../components/SideBar';
import SendMessage from '../components/SendMessage';
function ViewChannel(){
   return (
    <AppLayout>
    <SideBar>SideBar</SideBar>
    <Channels
     channelName = "A New"
     username="Sanjali"
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
    >Channels</Channels>
    <Head subfield="general" 
    subtext= "This is the general channel. Introduce yourself, share your geeky stories, interact and get to know each other.">Header</Head>
    <Messages>
    
    </Messages>
    <SendMessage>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </SendMessage>
  </AppLayout>
   );
    
}
export default ViewChannel;