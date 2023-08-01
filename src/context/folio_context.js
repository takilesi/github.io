import { createContext, useEffect, useState } from "react";
import axios from "axios";
import folioImage from '../folio.png'; 
import portImage from '../port.png'; 

export const AppContext = createContext()

const AppContextProvider = (props) =>  {
    const folio = folioImage
    const port = portImage

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)

    window.onresize = () => {
        // console.log('window is resizing')
        setWindowWidth(window.innerWidth)
    }

    return (
        <AppContext.Provider value ={{
            port, 
            folio, 
            windowWidth, 
            setWindowWidth
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider