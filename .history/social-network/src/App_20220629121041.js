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
          <a >Profile</a>
        </div>
        <div>
          <a >Message</a>
        </div>
        <div>
          <a >News</a>
        </div>
        <div>
          <a >Music</a>
        </div>
        <div>
          <a >Settings</a>
        </div>
       
      </nav>
      <div className='content'>
        main content
      </div>
    </div>
  );
}

export default  App;
