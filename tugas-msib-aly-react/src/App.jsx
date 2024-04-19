import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from  './component/Login.jsx'
import RegistrationForm from './component/Register.jsx'
import './App.css'
import ProfilePage from './component/Profile_Page.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/Profile_Page" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
