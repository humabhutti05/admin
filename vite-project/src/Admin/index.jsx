import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Category from './pages/Category'
import Authors from './pages/Authors'
import {
  Route,
  Routes,
} from "react-router-dom";

export default function Admin() {
  return (
    
         <div className="row m-0 p-0">
          <div className="col-md-3 m-0 p-0 bg-dark" style={{height: "100vh"}}>
            <Sidebar/>
          </div>
          <div className="col-md-9">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Home />} />
        <Route path="/author" element={<Authors />} />
      </Routes>
          </div>
         </div>

  )
}
