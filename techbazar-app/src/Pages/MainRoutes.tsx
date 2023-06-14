import {Routes, Route} from "react-router-dom"
import react from "react"

import React from 'react'
import { HomePage } from "./Homepage"

export default function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    </div>
  )
}
