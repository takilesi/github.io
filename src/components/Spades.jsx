import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState} from 'react';
import { AppContext } from "../context/folio_context";
// import HeartsL from '../components/HeartsL'
import SpadesC from '../components/SpadesC'
// import HeartsR from '../components/HeartsR'

function Spades() {

    const [box, setBoxH] = useState(0);

    return (
        <div className="heartsJsx"> 
            <button className="heartsButtons" onClick={()=>setBoxH(1)} >Landmark Education</button>
            {/* <button className="heartsButtons" onClick={()=>setBoxH(2)} >Vocal Confluence</button>
            <button className="heartsButtons" onClick={()=>setBoxH(3)} >Rachel Carson Trail Challenge</button>   */}
            <div className="bottomBox">
                {box === 1 && <SpadesC /> }
                {/* {box === 2 && <HeartsC /> }
                {box === 3 && <HeartsR /> } */}
            </div>
        </div>
      )
    }

export default Spades