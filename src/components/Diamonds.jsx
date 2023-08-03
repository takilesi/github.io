import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";

function Diamonds() {
  return (
    <div> 
        <h1>Diamonds</h1>
        {/* // anything beneath Link is clickable  */}
        <Link to='/home' className="landingPage">
            
        </Link>
    </div>
  )
}

export default Diamonds