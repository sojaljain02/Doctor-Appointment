import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
       <div className='mx-4 sm:mx-[10%]'>
        <Navbar ></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctors' element={<Doctors/>}></Route>
      <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/my-profile' element={<MyProfile/>}></Route>
      <Route path='/my-appointments' element={<MyAppointments/>}></Route>
    </Routes>
  </div>
  )
}

export default App
