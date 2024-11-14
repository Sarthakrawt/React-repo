import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  console.log("hello")
  return (
    <>
    <Header/>
   {/* in this case header will not change  */}
    {/* Outlet is for changing the compoents */}
    <Outlet/>
    </>
    
  )
}

export default App;



