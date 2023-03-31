import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import DatasetIcon from '@mui/icons-material/Dataset';
import InsightsIcon from '@mui/icons-material/Insights';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';



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
          {/* <Button color="inherit" onClick={()=>navigate('/')}>home</Button> */}
          <img src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" alt="logo" onClick={() => navigate('/')} className="logo" />
          <h3 className='nevi-text'>Everything AWS</h3>
          <Button color="inherit"><DatasetIcon/> data</Button>
          <Button color="inherit"><InsightsIcon /> insights</Button>
          <Button color="inherit">polymer</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
