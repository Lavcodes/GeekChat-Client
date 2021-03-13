import React, { useState } from 'react';
import { Button, Input, Container, Header} from 'semantic-ui-react'
import { useQuery, gql, useMutation } from '@apollo/client';

function Register() {
    const RegisterMutation = gql`
    
        mutation ($username: String!, $email: String!, $password: String!){
        Register(username: $username, email:$email, password:$password)
    }
    
   `;
    const [username, setUsername]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerUser]= useMutation(RegisterMutation,{
        variables:{
            username,
            email,
            password
        }
    });
    const onSubmit = async () => {
        try {
          const { data } = await registerUser();
          console.log(data);
        }
        catch (e) {
          console.log(e);
        }
      }

    const onInputChange = (e)=>{
        const {name, value}= e.target;
        if(name ==='username'){
            setUsername(value);
        }
        else if(name ==='email'){
            setEmail(value);
        }
        else if(name==='password'){
            setPassword(value);
        }

    }
   
        return(
           <Container text >
               <Header as="h2">
                   Register
               </Header>
               <Input  name="username" onChange={onInputChange}  value={username} placeholder="Username" fluid />
               <Input name="email" onChange={onInputChange} value={email} placeholder="Email" fluid />
               <Input name="password" onChange={onInputChange} value={password} type="password" placeholder="Password" fluid/>
               <Button onClick={onSubmit}>Submit</Button>
           </Container>
        );
    }

export default Register;