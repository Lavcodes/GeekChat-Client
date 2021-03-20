import React from 'react';
import Head from '../components/Header';
import AppLayout from '../components/AppLayout';
import Messages from '../components/Messages';
import Sidebar from '../containers/Sidebar';
import SendMessage from '../components/SendMessage';
function ViewChannel({match :{params}}){
   return (
    <AppLayout>
    <Sidebar currentChannelId={params.channel_id}>SideBar</Sidebar>
    <Head subfield="general" 
    subtext= "This is the general channel. Introduce yourself, share your geeky stories, interact and get to know each other.">Header</Head>
    <Messages>
    
    </Messages>
    <SendMessage channelId={params.channel_id?params.channel_id:0}/>
  </AppLayout>
   );
    
}
export default ViewChannel;