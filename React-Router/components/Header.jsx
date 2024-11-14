import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
         <NavLink to='' >
            home
        </NavLink>
        <NavLink to='about' >
            About
        </NavLink>
        <NavLink to='Insta' >
           Insta
        </NavLink>
        </>
       
      
    )
}

export default Header
