import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getLeadsContent = createAsyncThunk('/leads/content', async () => {
	const response = await axios.get('/api/users?page=2', {})
	return response.data;
})

export const coaSlice = createSlice({
    name: 'leads',
    initialState: {
        isLoading: false,
        leads : []
    },
    reducers: {


        addNewLead: (state, action) => {
            let {newLeadObj} = action.payload
            state.leads = [...state.leads, newLeadObj]
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.leads.splice(index, 1)
        }
    },

    extraReducers: {
		[getLeadsContent.pending]: state => {
			state.isLoading = true
		},
		[getLeadsContent.fulfilled]: (state, action) => {
			state.leads = action.payload.data
			state.isLoading = false
		},
		[getLeadsContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewLead, deleteLead } = coaSlice.actions

export default coaSlice.reducer