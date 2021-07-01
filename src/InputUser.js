import React from 'react'

export const InputUser = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const username = e.target.username.value
        let obj = {
            "id" : props.id + 1,
            "name" : name,
            "email" : email,
            "username" : username
            }
        props.setUsers((prev) => ([
            ...prev,
            obj
        ]))
    }

    return (
        <div>
            <form className="member-signup" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                id="name"
                type="text"
                placeholder="Name"
                />
                <label htmlFor="email">Email</label>
                <input 
                id="email"
                type="text"
                placeholder="Email"
                />
                <label htmlFor="username">Username</label>
                <input 
                id="username"
                type="text"
                placeholder="Username"
                /> 
                <button>Submit</button>
            </form> 
           
        </div>
        
    )
}
