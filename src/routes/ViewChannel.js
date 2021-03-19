import React from 'react';
import Head from '../components/Header';
import AppLayout from '../components/AppLayout';
import Messages from '../components/Messages';
import Sidebar from '../containers/Sidebar';
import SendMessage from '../components/SendMessage';
function ViewChannel(){
   return (
    <AppLayout>
    <Sidebar currentChannelId='28'>SideBar</Sidebar>
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