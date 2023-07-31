import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

    const Root = () => {
        const hide = (toeNail) => {
            toeNail.classList.add('hide')
        }
    }

  return (
    <div> 
        <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}>
            <p className="acomment">The dopest social network in the galaxy...</p>
            <div className="pageBody">
           
                <div className="infoBox">
                    <p></p>
                    <p className = "homePageFont">  Douglas L. Deckert </p>
                    {/* <marquee class="marq" behavior="scroll" direction="right">
                        <img src="src/ricksspaceship-removebg-preview_360.png" width="125" height="50" alt="smile" vspace="0%" />
                    </marquee> */}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default HomePage