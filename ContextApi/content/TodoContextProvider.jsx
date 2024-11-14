import React, { useState } from 'react'
import TodoContext from './TodoContext'

function TodoContextProvider({children}) {
    const [user, setUser] = useState(null);
    return (

        //children is a special props why beucase btw this component you write any other tag or compoent it will be it children or i can say it props 
        // why you pass a props in an component and print the props in the app.jsx file 
        // the same situation is here you are print the child components
        <TodoContext.Provider value={{user, setUser}}>
          {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
