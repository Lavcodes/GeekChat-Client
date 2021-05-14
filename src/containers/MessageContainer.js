import React, { useEffect, useState }from 'react';
import { useQuery, gql } from '@apollo/client';
import Messages from '../components/Messages';
import { Comment } from 'semantic-ui-react';

const newChannelMessageSubscription = gql`
subscription($channel_id: Int!) {
  newChannelMessage(channel_id: $channel_id) {
    id
    text
    createdAt
  }
}
`;
 
const allMessagesQuery = gql `
query($channel_id: Int!) {
    allMessages(channel_id: $channel_id) {
      id
      text
      user{
        username
      }
      createdAt
    }
}
`;

const MessageContainer = ({channelId})=>{
    
    const channel_id= parseInt(channelId, 10);

   const subscribeToNewComments = () =>{
       console.log('im here');
    subscribeToMore({
        document: newChannelMessageSubscription,
        variables: { channel_id },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) {
              console.log('waiting');
              return prev;
          }
          const newChannelMessage = subscriptionData.data.newChannelMessage;
           return {
              ...prev,
              allMessages: [...prev.allMessages, newChannelMessage],
            };
        },
        onError : (err) =>{console.log(err);}
      });
   }
        
        useEffect(()=>{
           
            subscribeToNewComments();
            
            
         }); 
         var { loading, error, data, subscribeToMore } = useQuery(allMessagesQuery, {
            variables:{
                channel_id,
            }
        });
        
        if(loading) return (<p>loading</p>)
        if(error) console.log(error);
        if(data)
        console.log(data);
    const {allMessages} = data;
    return(
        
        <Messages>
         <Comment.Group>
        {allMessages.map((m, index) => (
          <Comment key={`${m.id}-message`}>
            <Comment.Content>
              <Comment.Author as="a">{m.user.username}</Comment.Author>
              <Comment.Metadata>
                <div>{m.createdAt}</div>
              </Comment.Metadata>
              <Comment.Text>{m.text}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    </Messages>
    
    );
    
}
export default MessageContainer;