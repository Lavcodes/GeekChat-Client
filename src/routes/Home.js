import React from 'react';
import { useQuery, gql } from '@apollo/client';

const allUsersQuery = gql `
{
    allUsers{
        id
        username
    }
}
` ;
function AllUsers() {
    const { loading, error, data } = useQuery(allUsersQuery);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
        return(
            data.allUsers.map(u=>(
                <h1 key= {u.id}>{u.username}</h1>
            ))
        )
    }
    export default AllUsers;