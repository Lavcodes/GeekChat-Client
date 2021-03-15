import React, { useState } from 'react';
import { Button, Message, Input, Container, Header} from 'semantic-ui-react';
import {  gql, useMutation } from '@apollo/client';

function Login (){
    const LoginMutation = gql`
    
        mutation ($email: String!, $password: String!){
        Login( email:$email, password:$password){
            ok 
            token
            refreshToken
            errors{
                path
                message
            }
        }
    }
    
   `;
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser]= useMutation(LoginMutation,{
        variables:{
           
            email,
            password
        }
    });


    const onInputChange = (e)=>{
        const {name, value}= e.target;
        
        if(name ==='email'){
            setEmail(value);
        }
        else if(name==='password'){
            setPassword(value);
        }
        
    }
    const onSubmit = async()=>{
        try {
            const { data } = await loginUser();
            const {ok, token, refreshToken, errors }= data.Login;
            if(ok){
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
            }

            console.log(data.Login);

        } catch(e){
            console.log(e);
        }
        //console.log(email, password);
    }

    return (
        <Container text >
               <Header as="h2">
                   Login
               </Header>
               
               <Input 
               
               name="email" 
               onChange={onInputChange} 
               value={email} 
               placeholder="Email" fluid />
               <Input  
               name="password" 
               onChange={onInputChange} 
               value={password} type="password" 
               placeholder="Password" fluid/>
               
               <Button onClick={onSubmit}>Submit</Button>
              
           </Container>

    );
}
export default Login;
