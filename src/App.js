import React from 'react'
import './App.css'; 
import Home  from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { routhPath } from './consonats/routh';

const App = () => {
  return (
    <div>
      <BrowserRouter>
     
        <Routes>
           <Route path={routhPath.home} element={<Home/>}></Route>
           <Route path={routhPath.categories} element={<CategoryMovies/>}></Route>
           <Route path={routhPath.invalid} element={<Home/>}></Route>

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
