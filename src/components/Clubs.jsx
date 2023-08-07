import React, { useState } from 'react'
import ClubsC from '../components/ClubsC'

function Clubs() {

    const [box, setBoxH] = useState(0);

    return (
        <div className="heartsJsx"> 
            <button className="heartsButtons" onClick={()=>setBoxH(1)} >MeetUp Hikes</button>
            {/* <button className="heartsButtons" onClick={()=>setBoxH(2)} >Vocal Confluence</button>
            <button className="heartsButtons" onClick={()=>setBoxH(3)} >Rachel Carson Trail Challenge</button>   */}
            <div className="bottomBox">
                {box === 1 && <ClubsC /> }
                {/* {box === 2 && <HeartsC /> }
                {box === 3 && <HeartsR /> } */}
            </div>
        </div>
      )
    }

export default Clubs