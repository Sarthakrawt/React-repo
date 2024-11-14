import React from 'react'
import TodoContextProvider from './context/TodoContextProvider'
import Login from './component/Login'
import User from './component/User'

function App() {
  return (
    <TodoContextProvider>
      <Login/>
      <User/>
    
    </TodoContextProvider>
  )
}

export default App
