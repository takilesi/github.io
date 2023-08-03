
import React, { useContext } from 'react'
import { AppContext } from '../context/folio_context';

// import { Link } from 'react-router-dom'
// import { useContext, useEffect } from 'react';


function Desktop() {
    let { deck, diamonds } = useContext(AppContext);

  return (
    <div className="mainPage">
        <p className="mainPageTopText">Pick a Card</p>
        <div className="mainPageTopBox">
          <div className="cardContainer">
            <img src={deck[0].image} alt="" width="100%" />
          </div>
          <div className="cardContainer"></div>
          <div className="cardContainer"></div>
          <div className="cardContainer"></div>
        </div>
        
    </div>
  )
}

export default Desktop