import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hook/usePath'
import { Home, Like, Search, Single } from '../pages/Dashboard'

function CustomRoutes() {
  return (
    <Routes>
        <Route path={PATH.home} element={<Home/>}/>
        <Route path={PATH.like} element={<Like/>}/>
        <Route path={PATH.search} element={<Search/>}/>
        <Route path={PATH.single} element={<Single/>}/>
    </Routes>
  )
}

export default CustomRoutes