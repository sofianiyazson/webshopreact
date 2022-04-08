import React, { Component } from 'react';
import { useSelector } from 'react-redux';

 const  User = ()=>{

    const user = useSelector((state) => state.user.currentUser);


    return(
        <div>
            <p>Welcome {user.username}</p>
            <p>Email {user.email}</p>
            <p>Admin {user.isAdmin.toString()}</p>
        </div>
    )
}


export default User