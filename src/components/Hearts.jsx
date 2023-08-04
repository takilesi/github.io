import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";
import HeartsL from '../components/HeartsL'
import HeartsC from '../components/HeartsC'
import HeartsR from '../components/HeartsR'

function Hearts() {

    const [box, setBox] = useState(0);

    return (
        <div> 
            <button className="heartsButtons" onClick={()=>setBox(1)} >MeepUp</button>
            <button className="heartsButtons" onClick={()=>setBox(2)} >Vocal Confluence</button>
            <button className="heartsButtons" onClick={()=>setBox(3)} >Rachel Carson Trail Challenge</button>  
            <div className="bottomBox">
                {box === 1 && <HeartsL /> }
                {box === 2 && <HeartsC /> }
                {box === 3 && <HeartsR /> }
            </div>
        </div>
      )
    }

export default Hearts