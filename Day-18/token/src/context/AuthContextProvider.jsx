import React, { createContext, useState } from 'react'
 export const AuthContext=createContext();


const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=useState(false)
  const [token,setToken]=useState(null)

  const login=()=>{
    setIsAuth(true)
  }

  const logout=()=>{
    setIsAuth(false)
    setToken(null)
  }
  return (
    <div>
      <AuthContext.Provider value={{isAuth,login,logout}}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider