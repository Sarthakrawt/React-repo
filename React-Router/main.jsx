import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Insta from './components/Insta.jsx'
const router  =  createBrowserRouter(
[
  {
    path:'',
    element:<App/>,
    children:[
      {path: '/',
        element: <Home/>,
      },
          {
            path: 'about',
            element:<About/>
          },
          {
            path: 'Insta',
            element:<Insta/>
          },
      
    ]

  }
]
)

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>
)
