import React, { useState } from 'react';
import { Form, Button, Message, Input, Container, Header} from 'semantic-ui-react'
import { useQuery, gql, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';

function Register() {
    const RegisterMutation = gql`
    
        mutation ($username: String!, $email: String!, $password: String!){
        Register(username: $username, email:$email, password:$password){
            ok 
            errors{
                path
                message
            }
        }
    }
    
   `;
    const [username, setUsername]=useState('');
    const [usernameError, setUsernameError]= useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError]= useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError]= useState('');
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
          const {ok, errors }= data.Register;
          if(ok){
              <Redirect to = "./Home"></Redirect>
          }
          else{
            
              errors.forEach(({ path, message}) => {
                 
                  if(path==='username'){
                      setUsernameError(message);
                  }
                  else if(path==='email'){
                    setEmailError(message);
                }
                else if(path==='password'){
                    setPasswordError(message);
                }
              });
              
          }
         
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
        setUsernameError('');
        setEmailError('');
        setPasswordError(''); 
    }
   
        return(
            

           <Container text >
               <Header as="h2">
                   Register
               </Header>
               <Form>
                   <Form.Field  error={!!usernameError}>
                   <Input 
                      name="username" 
                      onChange={onInputChange}  
                      value={username} 
                      placeholder="Username" fluid />

                   </Form.Field>
                   <Form.Field error ={!!emailError}>
                   <Input 
                      name="email" 
                      onChange={onInputChange} 
                      value={email} 
                      placeholder="Email" fluid />

                   </Form.Field>
                   <Form.Field  error ={!!passwordError}>
                   <Input 
                      name="password" 
                      onChange={onInputChange} 
                      value={password} type="password" 
                      placeholder="Password" fluid/>
               

                   </Form.Field>
               
               
              
               <Button onClick={onSubmit}>Submit</Button>
               </Form>
               {
                  (usernameError || emailError || passwordError)?(<Message
                  error 
                  header="Invalid values"
                  list={
                      [usernameError?usernameError:null,
                        emailError?emailError:null,
                        passwordError?passwordError:null,

                    
                    ]
                  }></Message>): null
               }
               
           </Container>
        );
    }

export default Register;