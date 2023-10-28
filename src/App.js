import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Home'
import Footer from './Footer'
import Login from './auth/Login'
import Registration from './auth/Register'
import Otpverification from './auth/Otpverification'
import Resetpassword from './auth/Resetpassword'
import Createpassword from './auth/Createpassword'
import NoComponent from './Screen/NoComponent/NoComponent'
import Home from './Screen/views/Home'
import Country from './Screen/components/location/Country'
import State from './Screen/components/location/State'
import City from './Screen/components/location/City'

const App = () => {
  return (
    <div>
       <Navbar /> 
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signin' element={<Registration />} />
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/verify' element={<Otpverification />} />
        <Route exact path='/reset-password' element={<Resetpassword/>} />
        <Route exact path='/createpassword' element={<Createpassword/>} />
        <Route exact path='/dashboard' element={<Home/>} />
        <Route exact path="*" element={<NoComponent/>} />
        <Route excat path='/country' element={<Country/>} />
        <Route excat path='/state' element={<State/>} />
        <Route excat path='/city' element={<City/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App