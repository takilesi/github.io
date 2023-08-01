import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";

function HomePage() {

    let { windowWidth, folio, port } = useContext(AppContext)

  return (
    <div> 
        
      {/* // anything beneath Link is clickable  */}
      <Link to='/home' className="landingPage">
            
        <div className="pageBody">
            
          <p className="myName">  Douglas L. Deckert </p>
          <div className="folio">
            {/* <img src={folio} alt=""/> */}
          </div>
          <div className="port">
            <img className="port"  src={port} alt=""/>
          </div>
                
        </div>
      </Link>
    </div>
  )
}

export default HomePage