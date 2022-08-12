import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Edit from '../Pages/Edit'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Todo from '../Pages/Todo'
import TodoDetails from '../Pages/TodoDetails'
import Login from './Login'
import Navbar from './Navbar'
import PrivatedRoute from './PrivatedRoute'

const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
             <Route path='/' element={
               
               <PrivatedRoute>
                <Home/>
               </PrivatedRoute>
             }></Route> 
             <Route path='/todo' element={<Todo/>}></Route>
             <Route path="/todo/:id" element={<TodoDetails/>}></Route>
             <Route path="/todo/:id/edit" element={<Edit/>}></Route>
             <Route path="/error" element={<ErrorPage/>}></Route>
             <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes