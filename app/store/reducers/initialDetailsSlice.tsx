import { createSlice } from "@reduxjs/toolkit"

const initialState= {users:[]}
const initialDetailsSlice = createSlice({
    name:'initialDetails',
    initialState,
    reducers:{
        fetchUsers(){
            
        },
        setUsers:(state,action)=>{
            return {...state,users:action.payload}
        },
    }
})
export const { setUsers, fetchUsers } = initialDetailsSlice.actions
export default initialDetailsSlice.reducer