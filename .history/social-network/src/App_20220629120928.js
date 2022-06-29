import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
      </header>
      <nav className='nav'>
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Message</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
       
      </nav>
      <div className='content'>
        main content
      </div>
    </div>
  );
}

export default  App;
