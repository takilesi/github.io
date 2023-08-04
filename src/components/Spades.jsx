import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppContext } from "../context/folio_context";

function Spades() {
    return (
        <div className='bottomBox'> 
            Spades
            <div className="scrollContainer">

                <div className="bottomBoxBulletPoints">
                    left
                </div>
                <div className="bottomBoxBulletPoints">
                    center 
                </div>
                <div className="bottomBoxBulletPoints">
                    right 
                </div>

            </div>
        </div>
      )
    }

export default Spades