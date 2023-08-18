import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id:number;
  firstname: string;
  lastname: string;
  status: string;
  }

const userSlice = createSlice({
  name: "users",
  initialState: [] as User[], // Initialize with appropriate type if possible
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      return [...state, action.payload];
    },
    updateUser:(state,action)=>{
        let{id,firstname,lastname,status}=action.payload
        let uu = state.find(user =>user.id == id)
        if(uu){
          uu.firstname = firstname;
          uu.lastname=lastname;
          uu.status=status

        }
    },
    deleteUser:(state,action)=>{
      let{id,firstname,lastname,status}=action.payload
      let uu = state.find(user =>user.id == id)
      if(uu){
        return state.filter(f=>f.id != id)
      }
    }
  },
});



export const { addUser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
