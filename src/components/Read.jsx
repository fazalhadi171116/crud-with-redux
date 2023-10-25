import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteUser, showUser } from '../features/userDetailSlice'
import { Link } from 'react-router-dom'

const Read = () => {
   const dispatch =  useDispatch()
  const {user,loading} =  useSelector(state=>state.app)
   useEffect(()=>{
      dispatch(showUser(""))
   },[])


   const DeletePost = (id)=>{
     dispatch(deleteUser(id))

   }

   if(loading){
    return <h1>Loading...........</h1>
   }
  return (
    <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col" colSpan={2}>Operation</th>
    </tr>
  </thead>
  <tbody>
     {
     user && user.map((el)=>(
        <tr key={el.id}>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.age}</td>
        <td>{el.gender}</td>
        <td><Link to={`/update/${el.id}`}><button>Edit</button></Link> <button onClick={()=>DeletePost(el.id)}>Delete</button></td>
      </tr>
      ))
     }
 
  </tbody>
</table>
    </div>
  )
}

export default Read