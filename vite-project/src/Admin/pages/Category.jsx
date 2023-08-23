import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'

export default function Category() {


       const [Category ,setCategory ] =useState([])
      
    //   useEffect(() =>{
    //     axios.get('https://beautiful-jade-seahorse.cyclic.cloud/api/get-all-categories')
    //            .then((json) => console.log(json))
    //         .catch((err) => console.log(err))

    // }, [])






  return (
    <div className="container">
      <div className='d-flex justify-content-between align-items-center bg-info p-2 my-3 rounded'>
        <span className='fs-4 fw-bold text-white'>Categories</span>
        <CategoryModal/>
      </div>

        <div className="container">
        <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Category Name</th>
        <th scope="col">Category Image</th>
    
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>Category Name</td>
        <td>Category Image</td>
      
      </tr>
  
  
    </tbody>
  </table>


        </div>

    </div>
  )
}
