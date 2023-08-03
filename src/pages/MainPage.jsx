
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/folio_context';
import Spades from '../components/Spades'
import Hearts from '../components/Hearts'
import Diamonds from '../components/Diamonds'
import Clubs from '../components/Clubs'

function Desktop() {
    let { deck } = useContext(AppContext);

  const [suits, setSuits] = useState(0); 
  const [spadeHover, setSpadeHover] = useState(false);
  const [heartHover, setHeartHover] = useState(false);
  const [diamondHover, setDiamondHover] = useState(false);
  const [clubHover, setClubHover] = useState(false);

  return (
    <div className="mainPage">
        <p className="mainPageTopText">Pick a Card</p>
        <div className="mainPageTopBox">
          <div className="cardContainer"> 
            <div className="innerCardContainer"
               id="spades"
               onClick={()=>setSuits(1)} 
               onMouseEnter={() => setSpadeHover(true)}
               onMouseLeave={() => setSpadeHover(false)}>
              <img src={deck[0].image} alt="" width="100%" />
            </div>
            {spadeHover && (
            <p >
              ♠ Personal Development ♠
            </p>
            )}
          </div>









          <div className="cardContainer" onClick={()=>setSuits(2)}>
            <img src={deck[13].image} alt="" width="100%" />
          </div>
          <div className="cardContainer" onClick={()=>setSuits(3)}>
            <img src={deck[26].image} alt="" width="100%" />
          </div>
          <div className="cardContainer" onClick={()=>setSuits(4)}>
            <img src={deck[39].image} alt="" width="100%" />
          </div>
        </div>
        <div className="bottomBox">
          {suits === 1 && <Spades /> }
          {suits === 2 && <Hearts /> }
          {suits === 3 && <Diamonds /> }
          {suits === 4 && <Clubs /> }
        </div>
  


        
    </div>
  )
}


export default Desktop