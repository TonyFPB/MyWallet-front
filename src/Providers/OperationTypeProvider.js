import { createContext, useContext, useState } from "react";

const OperationTypeContext = createContext()

export function OperationTypeProvider({children}){
    const [type,setType] = useState("")
    return(
        <OperationTypeContext.Provider value={{type,setType}}>
            {children}
        </OperationTypeContext.Provider>
    )
}

export const useOperationTypeProvider =()=> useContext(OperationTypeContext)