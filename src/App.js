import { useState } from 'react';
import './App.css';
import reactlogo from './image/logo1.jpg';
import poster from './image/home-movie-poster.jpg';


function App() {

  const [showNavBar, setShowNavBar] = useState(false)
  function handleShowNavBar() {
    setShowNavBar(!showNavBar);
    console.log('...............................', showNavBar)
  }

  return (

    <div>
      {/* This is navbar.............. */}
      <div className='navbar'>

        <img src={reactlogo} className='logo' />
        {/* <a><svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg></a> */}
        <nav className='nav-contents'>
          <ul className={`nav-list  ${showNavBar ? 'navVisible' : 'navNonVisible'}`}>
            <li className='items'><a href='#'>Home</a></li>
            <li className='items'><a href='#'>Movies</a></li>
            <li className='items'><a href='#'>Contact Us</a></li>
          </ul>
        </nav>
        {/* <button>LogIn</button> */}
        <div className='nav-btn'>
          <button className='logIn-btn'>LogIn</button>
          <button className='signUp-btn'>SignUp</button>
        </div>
        {/* <input placeholder='Search Movie'></input> */}
        <div className='menu-icon'>
          <i className='fas fa-bars' onClick={handleShowNavBar}></i>
          {/* <i className='fas fa-times'></i> */}
        </div>
      </div>
      {/* End of Navbar............. */}


      {/* Home page body............ */}

      <div className='body'>
        <div className='home-poster'>
          <img src={poster} className='poster' />
          <div className='movie-search'>
            <div className='text-reveal-container'>
              <div>
                <h1 className='body-line'>Take a<span class="reveal-bg"></span></h1>
                <h1 className='body-line'>Break,<span class="reveal-bg1"></span></h1>
                <h1 className='body-line'>Book a Show<span class="reveal-bg2"></span></h1>
              </div>
            </div>
            {/* <div>
            <p>Search Movies</p>
            </div> */}
            <div className='search-input'>
            <input type="text" placeholder='Seach Movies' className='search-input-field'></input>
            </div>
          
          </div>
          
        </div>
        
      </div>

      {/* End of page body............ */}

    </div>


  );
}

export default App;
