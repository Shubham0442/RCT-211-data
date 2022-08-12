import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import SingleMusicRecord from '../Pages/SingleMusicRecord' 
import Login from '../Pages/Login' 
import EditMusicRecord from '../Pages/EditMusicRecord'
import MusicRecords from '../Pages/MusicRecords'
import ReqAuth from './ReqAuth'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music/:id" element={
               <ReqAuth>
               <SingleMusicRecord />
              </ReqAuth>
               }  
            />
            <Route path="/musicrecord" element={<MusicRecords/>}></Route>
            <Route path="/music/:id/edit" element={<EditMusicRecord />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
        
    </div>
  )
}

export default AllRoutes