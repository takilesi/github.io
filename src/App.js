import { useContext, useEffect } from 'react';

import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import HomePage from './pages/LandingPage';

import { AppContext } from './context/folio_context';

import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import folio from './folio.png';
import logo from './logo.svg';


function App() {

  let { windowWidth, clickedProfile, setPageMount, setCharacters, fetchRick, grabCharacters } = useContext(AppContext)

  // setPageMount(true)
  // console.log(window.innerWidth)
  // console.log('CLICKED PROFILE', clickedProfile)
  // console.log('width',windowWidth)

    // mobile
  
      return (
        <div className="App">
          <Routes> 
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Mobile />}/>
            {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="mobile"/>}/> */}
          </Routes>
        </div>
      )
    
    
   

    
}

export default App;