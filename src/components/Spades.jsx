import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";

function Spades() {
    return (
        <div> 
            <h1>Spades</h1>
            {/* // anything beneath Link is clickable  */}
            <Link to='/home' className="landingPage">
                
            </Link>
        </div>
      )
    }

export default Spades