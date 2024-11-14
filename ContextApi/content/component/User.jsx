import React, {useContext} from 'react'
import TodoContext from '../context/TodoContext'

function User() {
    const {user} = useContext(TodoContext);
    console.log(user);
    return (
        <>
        <div>
            <h1>Hello {user.username} , {user.password}</h1>
        </div>
        </>
    )
}

export default User
