import React, { useState } from 'react';
import { Form, Button, Message, Input, Container, Header} from 'semantic-ui-react';
import {  gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

function Login (){
    let history = useHistory();
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
    const [emailError, setEmailError]= useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError]= useState('');
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
        setEmailError('');
        setPasswordError(''); 
        
    }
    const onSubmit = async()=>{
        try {
            const { data } = await loginUser();
            const {ok, token, refreshToken, errors }= data.Login;
            if(ok){
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
                //console.log(data);
                history.push('/createchannel');
            }
            else{
              
                errors.forEach(({ path, message}) => {
                   
                     if(path==='email'){
                      setEmailError(message);
                  }
                  else if(path==='password'){
                      setPasswordError(message);
                  }
                });
                
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
               <Form>
                   <Form.Field error ={!!emailError}>
                   <Input 
               
                    name="email" 
                    onChange={onInputChange} 
                    value={email} 
                    placeholder="Email" fluid />

                   </Form.Field>
                   <Form.Field error ={!!passwordError}>
                   <Input 
               
                      name="password" 
                      onChange={onInputChange} 
                      value={password} 
                      placeholder="Password" fluid />

                   </Form.Field>
                 
              
               <Button onClick={onSubmit}>Submit</Button>
              

               </Form>
               {
                   ( emailError || passwordError)?(<Message
                    error 
                    header="Invalid values"
                    list={[
                        emailError?emailError:null,
                        passwordError?passwordError:null,
                    ]

                    }></Message>): null
               }
               
               
           </Container>

    );
}
export default Login;
