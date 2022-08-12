import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Edit from '../Pages/Edit'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Todo from '../Pages/Todo'
import TodoDetails from '../Pages/TodoDetails'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>}></Route> 
             <Route path='/todo' element={<Todo/>}></Route>
             <Route path="/todo/:id" element={<TodoDetails/>}></Route>
             <Route path="/todo/:id/edit" element={<Edit/>}></Route>
             <Route path="/error" element={<ErrorPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes