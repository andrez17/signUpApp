import React from 'react'

export const User = (props) => {

    const handleClick = () =>{
        props.setUsers((prev) =>
            prev.filter((elem) => elem.id !== props.userid))
    }

    return (
        <tr id={props.userid}>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.username}</td>
            <td><button onClick={handleClick}>Remove</button></td>
        </tr>
    )
}
