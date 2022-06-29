import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
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
