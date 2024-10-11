import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//npm run start will run the code you 
// npm create vite@latest you can also download it is just a blunderer 
// you can download react wich is not bulkeyer then react app
//npm install you need to install to run the program 
// you can check how  you can run the code 
// it is written in the json file 


// react made it own Dom which is a tree sturcture 
// it is also known as virtual dom 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // it help you to render jsx or javascirpt and html inside a react code 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


