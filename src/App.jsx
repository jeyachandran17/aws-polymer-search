import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <Application />
    </div>
  )
}

export default App


function Application() {
  const navigate = useNavigate();
  return (
    <div className="Application">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate('/')}>home</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return(
    <div className='home-page'>
      <h3>welcome to start with captone project</h3>
    </div>
  );
}

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h3>Page Not Found, check your correct url </h3>
    </div>
  );
}