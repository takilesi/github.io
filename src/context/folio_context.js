import { createContext, useEffect, useState } from "react";
import axios from "axios";
import folio from './folio.png'; 
import port from './port.png'; 

export const AppContext = createContext()

const AppContextProvider = (props) =>  {
    const folioPic = folio
    const portPic = port

    return (
        <AppContext.Provider value ={{
            folioPic, 
            portPic
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider