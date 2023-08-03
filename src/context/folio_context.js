import { createContext, useEffect, useState } from "react";
import axios from "axios";
import folioImage from '../folio.png'; 
import portImage from '../port.png'; 

export const AppContext = createContext()

const AppContextProvider = (props) =>  {
    const folio = folioImage
    const port = portImage

    const [deck, setDeck] = useState("")
        
    const getDeck = async () => {
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    
    let sortedCards = response.data.cards.sort(
        (c1, c2) => (c1.suit < c2.suit) ? 1 : (c1.suit > c2.suit) ? -1 : 0);
    console.log("Sorted", sortedCards); 
    setDeck(response.data.cards);
    
  
    
    }
    
    useEffect(()=>{
        getDeck()
    },[])


    const [ spades, setSpades ] = useState([])
    const [ hearts, setHearts ] = useState([])
    const [ diamonds, setDiamonds ] = useState([])
    const [ clubs, setClubs ] = useState([])




    return (
        <AppContext.Provider value ={{
            deck, 
            setDeck,
            getDeck,
            port, 
            folio, 
            diamonds
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider