import React from 'react';

import UsersList from '../components/UsersList';
const Users =()=>{
    const USERS=[
        {
            id:"1",
            name:"meni",
            image:"https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
            places:3
        }
    ]
    return <UsersList items={USERS}/>}//return the array of one user to userslist

export default Users;
//it is stateful componenet because it will fetch data 

//it is normal that we have more presentational components(how things are presented) than statefum compo(manage and fetch data )