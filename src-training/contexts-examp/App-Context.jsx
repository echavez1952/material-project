import React from 'react'
// import { ContextApp } from './PageContext'
// import { ContextApp } from './UserContext'
import { ContextApp } from './SumarContext'




export const MyContext = () => {
 
  return (
    <div className="m-6">
      <h1 className="text-3xl font-bold text-red-600">useContext Hook</h1>
        <ContextApp/> 
    </div>
  )
}
