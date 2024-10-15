 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div> 
//       <h1>Hello its working </h1>
//     </div>
//   )
// }

const reactElement = React.createElement(
  'a' ,
  {
    href: "http://google.com"
  } , 'click me to visit google'
)
const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
