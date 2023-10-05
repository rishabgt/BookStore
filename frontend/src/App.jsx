import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<DeleteBook/>}/>
      <Route path='/books/delete/:id' element={<EditBook/>}/>
    </Routes>
  )
}

export default App