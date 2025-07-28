import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'
import UserDetails from './pages/UserDetails'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/user' element = {<UserDetails />} />
        <Route path='*' element = {<Notfound />} />
      </Routes>
      
    </div>
  )
}

export default App