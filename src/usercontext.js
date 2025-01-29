import React from 'react'
//יצירת המאגר
const usercontext=React.createContext({})
//ספק המידע שלנו
export const MyProvider=usercontext.Provider

export default usercontext