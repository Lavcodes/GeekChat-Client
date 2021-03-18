import React, { useState } from 'react';
import { Form, Button, Message, Input, Container, Header} from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

function CreateChannel (){
    let history = useHistory();

    const ChannelMutation = gql `
    mutation($channelname : String!){
        createChannel(channelname : $channelname){
            ok
            errors{
                path
                message
            }
        }
    }

    `;

    const [channelname, setChannelName] = useState('');
    const [channelNameError, setChannelNameError] = useState('');
    const [createNewChannel]= useMutation(ChannelMutation,{
        variables:{
           channelname,
        }
    });
    const onInputChange = (e)=>{
        const {name, value}= e.target;
        setChannelName(value);
        setChannelNameError('');
    }
    const onSubmit= async () =>{
        try {
            const { data } = await createNewChannel();
            const {ok, errors }= data.createChannel;
            if(ok){
                console.log(data);
                history.push('/');
            }

        } catch (e){
            console.log(e);
            history.push('/login');
        }
        
    }
    return(
            

        <Container text >
            <Header as="h2">
                Create New Channel
            </Header>
            <Form>
                <Form.Field >
                <Input 
                   name="channelname" 
                   onChange={onInputChange}  
                   value={channelname} 
                   placeholder="Channel Name" fluid />

                </Form.Field>
            <Button onClick = {onSubmit}>Create Channel</Button>
            </Form>
            </Container>
            );
   



}
 export default CreateChannel;