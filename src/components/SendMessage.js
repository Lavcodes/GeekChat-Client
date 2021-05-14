import React, { useState } from 'react';
import { gql, useMutation,  useQuery  } from '@apollo/client';
import styled from 'styled-components';
import { Button, Icon, Input  } from 'semantic-ui-react';
import _ from 'lodash';

//import FileUpload from '../components/FileUpload';

const SendMessageWrapper = styled.div`
  grid-column: 3;
  grid-row: 3;
  margin: 20px;
  display: grid;
  grid-template-columns: auto;
`;

const ENTER_KEY = 13;

const SendMessage= ({channelId}) => {
  const channel_id = parseInt(channelId, 10);
  const createMessageMutation = gql`
  mutation( $text: String!, $channel_id: Int!,) {
    createMessage( text: $text, channel_id: $channel_id,)
  }
`;

const [text, setText] = useState('');
const [createMessage]= useMutation(createMessageMutation,{
  variables:{
     
     text,
     channel_id,
  }
});
  
  const onInputChange= (e)=>{
    const {value}= e.target;
    setText(value);
  };

  const onSubmit = async()=>{
      try{
        const {data}=await createMessage();
        console.log(data);
        
      }catch(err){
        console.log(err);
      }
      setText('');
  };


  return (
    <SendMessageWrapper>
    <Input 
      name='send-text'
      value={text}
      onKeyDown={(e) => {
        if (e.keyCode === ENTER_KEY) {
          onSubmit(e);
        }
      }}
      onChange={onInputChange}
      fluid 
      placeholder={`Type a Message #${channel_id}`} />
  </SendMessageWrapper>
  );
};
  

export default SendMessage;