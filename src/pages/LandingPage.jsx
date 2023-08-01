import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";

function HomePage() {

    let { windowWidth, folio, port } = useContext(AppContext)

  return (
    <div> 
        <p className="acomment">The dopest social network in the galaxy...</p>
        {/* // anything in here will be clickable  */}
        <Link to='/home' className="mainLink">
            
            <div className="pageBody">
           
                <div className="infoBox">
                    <p></p>
                    <p className = "homePageFont">  Douglas L. Deckert </p>
                    <img class="folio" src={folio} alt=""/>
                    <img class="port"  src={port} alt=""/>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default HomePage