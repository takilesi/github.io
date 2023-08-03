import { useContext, useEffect } from 'react';

import MainPage from './pages/MainPage';
import HomePage from './pages/LandingPage';

import { AppContext } from './context/folio_context';

import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import folio from './folio.png';
import logo from './logo.svg';

import "./App.css"


function App() {

  let { clickedProfile, setPageMount } = useContext(AppContext)

      return (
        <div className="App">
          <Routes> 
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<MainPage />}/>
            {/* <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="mobile"/>}/> */}
          </Routes>
        </div>
      )
    
    
   

    
}

export default App;