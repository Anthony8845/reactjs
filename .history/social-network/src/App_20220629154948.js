import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/header';
import Nav from './components/nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default  App;
