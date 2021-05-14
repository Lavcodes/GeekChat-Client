import React from 'react';
import Head from '../components/Header';
import AppLayout from '../components/AppLayout';
import Sidebar from '../containers/Sidebar';

function ViewChannel({match :{params}}){
   return (
    <AppLayout>
    <Sidebar currentChannelId={params.channel_id}>SideBar</Sidebar>
    <Head subfield="general" 
    subtext= "This is the general channel. Introduce yourself, share your geeky stories, interact and get to know each other.">Header</Head> 
  </AppLayout>
   );
    
}
export default ViewChannel;