import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
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
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVJL6bbQpxICFv6lUjhf7j6U-tQ4sJa-TCg&usqp=CAU" alt="" />
        </div>
        <div> avatar discription</div>
        <div> posts
          <div>my post
            <div>newpost</div>
            <div>post1</div>
            <div>post1</div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default  App;
