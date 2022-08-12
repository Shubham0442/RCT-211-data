import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Edit from '../Pages/Edit'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MusicRecords from '../Pages/MusicRecords'
import SingleMusicRecords from '../Pages/SingleMusicRecords'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/musicRecord' element={<MusicRecords/>}></Route>
            <Route path='/musicRecord/:id' element={ 
              <PrivateRoute>
                <SingleMusicRecords/>
              </PrivateRoute>
            }></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/musicRecord/:id/edit' element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes