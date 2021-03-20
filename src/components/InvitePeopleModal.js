import React, {useState}from 'react';
import { Form, Input, Button, Modal } from 'semantic-ui-react';
import { useMutation, gql } from '@apollo/client';
import normalizeErrors from '../normalizeErrors';


function InvitePeopleModal({open , onClose, channel_id}){
    const addChannelMemberMutation = gql`
  mutation($email: String!, $channel_id: Int!) {
    addChannelMember(email: $email, channel_id: $channel_id) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [addChannelMember]= useMutation(addChannelMemberMutation, {
        variables:{
            email, 
            channel_id
        }
    });
    const onInputChange = (e)=>{
        const {value} = e.target;
        setEmail(value);
        setEmailError('');
    }
    const onSubmit= async() =>{
        try{
           const {data} = await addChannelMember();
           const {ok, errors} = data.addChannelMember;
           if(ok){
               console.log(data);
           } 
           else {
               setEmailError(errors[0].message);
           }
        }
        catch(err){
            console.log(err);
        }
        setEmail('');
    };
    return (
        <Modal open={open} onClose={onClose}>
    <Modal.Header>Add People to your Team</Modal.Header>
    <Modal.Content>
      <Form>
        <Form.Field>
          <Input
            value={email}
            onChange={onInputChange}
            name="email"
            fluid
            placeholder="User's email"
          />
        </Form.Field>
        {emailError}
        <Form.Group widths="equal">
          <Button fluid onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit} fluid>
            Add User
          </Button>
        </Form.Group>
      </Form>
    </Modal.Content>
  </Modal>
    );
}
export default InvitePeopleModal;
