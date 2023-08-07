// projects go here 
import React from 'react'
import { useState } from 'react';
import DiamondsSG from '../components/DiamondsSG'
import DiamondsC from '../components/DiamondsC'
import DiamondsWF from '../components/DiamondsWF'
import DiamondsSB from '../components/DiamondsSB'
import DiamondsMEB from '../components/DiamondsMEB'
import DiamondsMF from '../components/DiamondsMF'

function Diamonds() {

  const [box, setBoxD] = useState(0);

  return (
    <div className="heartsJsx"> 
    <button className="heartsButtons" onClick={()=>setBoxD(1)} >Student Grader</button>
    <button className="heartsButtons" onClick={()=>setBoxD(2)} >Calculator</button>
    <button className="heartsButtons" onClick={()=>setBoxD(3)} >Word Find</button>  
    <button className="heartsButtons" onClick={()=>setBoxD(4)} >Space Book</button> 
    <button className="heartsButtons" onClick={()=>setBoxD(5)} >Magic Eight Ball</button> 
    <button className="heartsButtons" onClick={()=>setBoxD(6)} >Movie Finder</button> 
    <div className="bottomBox">
        {box === 1 && <DiamondsSG /> }
        {box === 2 && <DiamondsC /> }
        {box === 3 && <DiamondsWF /> }
        {box === 4 && <DiamondsSB /> }
        {box === 5 && <DiamondsMEB /> }
        {box === 6 && <DiamondsMF /> }
    </div>
</div>
  )
}

export default Diamonds