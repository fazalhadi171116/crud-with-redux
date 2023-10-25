import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
    const [users,setUsers] = useState()
   let {id} =  useParams()
   const user =  useSelector(state=>state.app.user)
   const [singleData,setSingleData] = useState()
  
   useEffect(()=>{
     if(id){
        const singleUser = user.filter(el=>el.id==id)
        setSingleData(singleUser[0])
     }
   },[])
   //console.log(singleData)
  


    const navigate = useNavigate()
  const dispatch =   useDispatch()
    const getUserData = (e)=>{
        setSingleData({...singleData,[e.target.name]:e.target.value})
       
    }
    const submitHandle = (e)=>{
        e.preventDefault();
     //   console.log("cccccccccccc",singleData)
       // dispatch(createUser(users))
        //navigate('/read')
        dispatch(updateUser(singleData))
          navigate('/read')
       
    }
   
  return (
    <>
      <form className="w-50 mx-auto" onSubmit={submitHandle}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" onChange={getUserData} value={singleData && singleData.name} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" name="email" onChange={getUserData} value={singleData && singleData.email} />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input type="text" className="form-control" name="age" onChange={getUserData} value={singleData && singleData.age} />
        </div>
        <div className="form-check">
  <input className="form-check-input" type="radio" value="Male" name="gender" checked={singleData && singleData.gender==="Male"} id="flexRadioDefault1" onChange={getUserData}/>
  <label className="form-check-label" for="flexRadioDefault1" >
   Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  checked={singleData && singleData.gender==="Female"} name="gender" value="Female" id="flexRadioDefault2" onChange={getUserData}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
