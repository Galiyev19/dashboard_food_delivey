import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-in" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default Router