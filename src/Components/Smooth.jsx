import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Dummy from './Dummy'
import DataToShow from './DataToShow'
import Update from './Update'

export default function Smooth() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route  index element={<Dummy/>}/>
                <Route path="/update" element={<Update/>}/>
                <Route path='datatoshow'  element={<DataToShow/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
