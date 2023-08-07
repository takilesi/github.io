// personal interests go here 
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";
import HeartsL from '../components/HeartsL'
import HeartsC from '../components/HeartsC'
import HeartsR from '../components/HeartsR'

function Hearts() {

    const [box, setBoxH] = useState(0);

    return (
        <div className="heartsJsx"> 
            <button className="heartsButtons" onClick={()=>setBoxH(1)} >Coffee Roasting</button>
            <button className="heartsButtons" onClick={()=>setBoxH(2)} >Vocal Confluence</button>
            <button className="heartsButtons" onClick={()=>setBoxH(3)} >Rachel Carson Trail Challenge</button>  
            <div className="bottomBox">
                {box === 1 && <HeartsL /> }
                {box === 2 && <HeartsC /> }
                {box === 3 && <HeartsR /> }
            </div>
        </div>
      )
    }

export default Hearts