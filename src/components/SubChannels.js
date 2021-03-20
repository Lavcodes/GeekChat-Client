import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const ChannelWrapper =  styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  margin-left : 2px;
  margin-right :2px;
  background-color : #4f2949;
  border-right :2px solid rgba(149, 137, 147, 0.3);
  border-opacity: 0.0;
`;
const Basic = styled.div`
height:5vh;
border-bottom: 1px solid rgba(48, 13, 42, 0.3);;
font-weight: bold;
font-size: 1rem;
color : rgba(230, 213, 227,1);
letter-spacing: 0.10rem;
`
const NameWrapper = styled.div`
height : 10vh;
border-bottom: 2px solid rgba(212, 178, 205 ,0.5);
`;

const DivStyles= styled.div`
height : 3.5vh;
background-color: rgba(212, 178, 205, 0.7);
border: 2px solid rgba(212, 178, 205, 0.3);
border-radius : 2px;
text-align: center;

font-size: 1.4rem;
font-weight: bold;
letter-spacing: 0.25rem;
`;

const Astyle= styled.div`
font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    color : rgba(230, 213, 227,1);
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
`;

const Astyle2= styled.div`
font-size: 1rem;
    text-align: center;
    color : rgba(230, 213, 227,1);
    padding: 2rem 0;
    letter-spacing: 0.25rem;
`;



const SubField = ({ id, name}) =><div>
    <Basic>#{name}</Basic>
    
</div> 
const User = ({ id, name }) => <Basic>
    <Icon inverted color='grey' name="user"></Icon>
    {name}</Basic>;

const SubChannels =({
    channelName, username, SubFields, users, onInvitePeopleClick,
  }) => (
    <ChannelWrapper>
        <NameWrapper>
       <Astyle>
       
       {channelName}
       </Astyle>
        </NameWrapper>
        
        <NameWrapper>
        
        <Astyle2>
           
        <Icon inverted color='grey' name="user" size='large' /> 
        {username}
        </Astyle2>
        </NameWrapper>
        
        <DivStyles>
            <div>
                CATCH UP!
            </div>
        </DivStyles>
     
      <div>
          {SubFields.map(SubField)}
      </div>
      <br></br>
      <DivStyles>
      <div>ONLINE NOW</div>
      </DivStyles>
      <div>
          {users.map(User)}
      </div>
      <div>
          <a href="#invite-people" onClick={onInvitePeopleClick}>
          + Invite People
          </a>
          
      </div>
    </ChannelWrapper>
  );
  export default SubChannels;

  