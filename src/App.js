import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Coding from 'pages/Coding';
import Settings from 'pages/Settings';
import Sidebar from 'components/Sidebar';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
      <div className='sidepanel'>
        <Sidebar/>
      </div>
      <div className='main-content'>
        <Routes>
          <Route path='/' exact element={<Navigate to="/home"/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/coding' element={<Coding />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
