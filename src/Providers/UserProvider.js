import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [nameUser, setNameUser] = useState("Fulano")
    return(
        <UserContext.Provider value={{nameUser,setNameUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserProvider = ()=>useContext(UserContext)