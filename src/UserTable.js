// import React, { useState } from 'react'
import { User } from './User'
import { InputUser } from './InputUser'

export const UserTable = (props) => {

    return (
        <div>
            <InputUser setUsers={props.setUsers} users={props.users} id={props.users.length}/>
            <table id="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                    {/* {console.log(props.users)} */}
                    {props.users.map((user) =>{
                        return <User 
                        key={user.id}
                        userid={user.id}
                        name={user.name} 
                        email={user.email}
                        username={user.username}
                        setUsers={props.setUsers}/>
                    })
                    }
                    
                </thead>
            </table>
        </div>
    )
}
