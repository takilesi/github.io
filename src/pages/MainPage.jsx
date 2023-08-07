
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
        
        <div className="mainPageTopBox">
          
          {/* SPADES */}
          <div className="cardContainer"> 
            <div className="innerCardContainer"
               id="spades"
               onClick={()=>setSuits(1)} 
               onMouseEnter={() => setSpadeHover(true)}
               onMouseLeave={() => setSpadeHover(false)}>
              <img src={deck[0]?.image} alt="" width="100%" />
            </div>
            {spadeHover && (
              <div >
                <p className="heading">Personal</p>
                <p className="heading">Development</p>
              </div>
            )}
          </div>

          {/* HEARTS */}
          <div className="cardContainer"> 
            <div className="innerCardContainer"
               id="hearts"
               onClick={()=>setSuits(2)} 
               onMouseEnter={() => setHeartHover(true)}
               onMouseLeave={() => setHeartHover(false)}>
              <img src={deck[13]?.image} alt="" width="100%" />
            </div>
            {heartHover && (
              <div>
                <p className="heading">Personal</p> 
                <p className="heading">Interests</p>
              </div>
            )}
          </div>

          {/* DIAMONDS */}
          <div className="cardContainer"> 
            <div className="innerCardContainer"
               id="diamonds"
               onClick={()=>setSuits(3)} 
               onMouseEnter={() => setDiamondHover(true)}
               onMouseLeave={() => setDiamondHover(false)}>
              <img src={deck[26]?.image} alt="" width="100%" />
            </div>
            {diamondHover && (
              <div >
                <p className="heading">Projects</p>
                <p className="heading">Styling</p>
              </div>
            )}
          </div>

          {/* CLUBS */}
          <div className="cardContainer"> 
            <div className="innerCardContainer"
               id="clubs"
               onClick={()=>setSuits(4)} 
               onMouseEnter={() => setClubHover(true)}
               onMouseLeave={() => setClubHover(false)}>
              <img src={deck[39]?.image} alt="" width="100%" />
            </div>
            {clubHover && (
              <div  >
                <p className="heading">Social</p>
                <p className="heading">Activities</p>
              </div>
            )}
          </div>

        </div>
        <div className="space"></div>
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