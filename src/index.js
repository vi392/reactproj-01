import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './project/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from './project/Home';
import About from './project/About';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path= '/about' element={<About/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


