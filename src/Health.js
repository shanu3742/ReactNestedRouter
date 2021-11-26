import React from 'react'
import {  Routes,Route } from 'react-router'
import ShanuHome from './ShanuHome'
import ShanuSubstitute from './ShanuSubstitute'

const Health = () => {
    return (
        <div>
           <Routes>
           <Route path='/' element={<ShanuHome/>} />
           <Route path='substitute' element={<ShanuSubstitute/>} />
           
           </Routes>
        </div>
    )
}

export default Health
