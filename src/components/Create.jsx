import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [users,setUsers] = useState({})
    const navigate = useNavigate()
  const dispatch =   useDispatch()
    const getUserData = (e)=>{
        setUsers({...users,[e.target.name]:e.target.value})
       
    }
    const submitHandle = (e)=>{
        e.preventDefault();
        dispatch(createUser(users))
        navigate('/read')
       
    }
   
  return (
    <>
      <form className="w-50 mx-auto" onSubmit={submitHandle}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" onChange={getUserData} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" name="email" onChange={getUserData} />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input type="text" className="form-control" name="age" onChange={getUserData} />
        </div>
        <div className="form-check">
  <input className="form-check-input" type="radio" value="Male" name="gender" id="flexRadioDefault1" onChange={getUserData}/>
  <label className="form-check-label" for="flexRadioDefault1" >
   Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="Female" id="flexRadioDefault2" onChange={getUserData}/>
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
