import { useContext, useEffect } from 'react';

import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Tablet from './pages/Tablet';
import HomePage from './pages/HomePage';

import { AppContext } from './context/folio_context';

import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import folio from './folio.png';
import logo from './logo.svg';

function App() {

  let { windowWidth, clickedProfile, setPageMount, setCharacters, fetchRick, grabCharacters } = useContext(AppContext)

  console.log(folio-removebg); 
  console.log(logo); 

  // setPageMount(true)
  // console.log(window.innerWidth)
  // console.log('CLICKED PROFILE', clickedProfile)
  // console.log('width',windowWidth)

    // mobile
    if(windowWidth <= 300){
      return (
        <>
          <Routes> 
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Mobile />}/>
            {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="mobile"/>}/> */}
          </Routes>
        </>
      )
    }
    
    // tablet
    if(windowWidth > 301 && windowWidth <= 1199 ){
      return (
        <>
          <Routes>
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home/*" element={<Tablet />}/>
            {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="tablet"/>}/> */}
          </Routes>
        </>
      )
    }

    // desktop
    if(windowWidth > 1200){
      return (
        <>
          {/* <h1 style={{margin:"100px"}}>DESKTOP</h1> */}
          <Routes>
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Desktop />}/>
            {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile}/>} parent="desktop"/> */}
          </Routes>
        </>
      )
    }
}

export default App;
