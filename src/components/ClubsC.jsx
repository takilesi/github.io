import React from 'react'
import meetup from '../meetup.jpg'; 

function ClubsC() {
  return (
    <div className="">
        <p className="hikes">Locations: </p>
        <p className="hikes">Hays Woods</p>
        <p className="hikes">Riverview Park</p>
        <p className="hikes">Crafton Park</p>

        <p className="hikes">Thornburg Conservatoin Park</p>
        <p className="hikes">Downtown</p>
        <p className="hikes">Beachwood Farms</p>
        <p className="hikes">Hartwood Acres</p>
          
        <img className="diamond" style={{width: '100%'}} src={meetup} alt=""/>
 
    </div>
  )
}

export default ClubsC