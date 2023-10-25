import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
// createUser
export const createUser = createAsyncThunk('createUser',async (data,{rejectWithValue})=>{
    const response = await fetch('https://6533f953e1b6f4c590467113.mockapi.io/crud',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        
      });
 try {
   const result =await response.json()
   return result
 } catch (error) {
   return rejectWithValue(error)
 }
})
// read user action 

export const showUser = createAsyncThunk("showUser",async ({rejectWithValue})=>{
    const response = await fetch('https://6533f953e1b6f4c590467113.mockapi.io/crud')
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
// delete user
export const deleteUser = createAsyncThunk("deleteUser",async (userId,{rejectWithValue})=>{
  const response = await fetch(`https://6533f953e1b6f4c590467113.mockapi.io/crud/${userId}`,{
    method:"DELETE"
  })
  try {
      const result = await response.json();
      return result
  } catch (error) {
      return rejectWithValue(error)
  }
})


// updateUser
export const updateUser = createAsyncThunk('updateUser',async (data,{rejectWithValue})=>{
  const response = await fetch(`https://6533f953e1b6f4c590467113.mockapi.io/crud/${data.id}`,{
      method:"PUT",
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
      
    });
try {
 const result =await response.json()
 return result
} catch (error) {
 return rejectWithValue(error)
}
})


const initialState = {
    user:[],
    loading:false,
    error : null
}
export const userDetails = createSlice({
    name:'userDetails',
    initialState,
    extraReducers:{
     [createUser.padding]:(state)=>{
       state.loading = true
     },
     [createUser.fulfilled]:(state,action)=>{
        state.loading = false
       state.user.push(action.payload)
      },
      [createUser.rejected]:(state,action)=>{
        state.loading = false
        state.error = action.payload
      },

      [showUser.padding]:(state)=>{
        state.loading = true
      },
      [showUser.fulfilled]:(state,action)=>{
         state.loading = false
        state.user = action.payload
       },
       [showUser.rejected]:(state,action)=>{
         state.loading = false
         state.error = action.payload
       },

       [deleteUser.padding]:(state)=>{
        state.loading = true
      },
      [deleteUser.fulfilled]:(state,action)=>{
        // state.loading = false
     let {id} =    action.payload
        if(id){
          state.user = state.user.filter(el=>el.id !==id)
        }
       // state.user = action.payload
       },
       [deleteUser.rejected]:(state,action)=>{
         state.loading = false
         state.error = action.payload
       },

       [updateUser.padding]:(state)=>{
        state.loading = true
      },
      [updateUser.fulfilled]:(state,action)=>{
        state.user = state.user.map(el=>el.id===action.payload.id ? action.payload:el)
       },
       [updateUser.rejected]:(state,action)=>{
         state.loading = false
         state.error = action.payload
       },


    }

})

export default userDetails.reducer