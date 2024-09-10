import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const getJournalContent = createAsyncThunk('/journalacc/content', async () => {
	const response = await axios.get('/api/users?page=2', {})
	return response.data;
})

export const journalslice = createSlice({
    name: 'Journal',
    initialState: {
        isLoading: false,
        Journal : []
    },
    reducers: {


        addNewLead: (state, action) => {
            let {newJourObj} = action.payload
            state.Journal = [...state.Journal, newJourObj]
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.Journal.splice(index, 1)
        }
    },

    extraReducers: {
		[getJournalContent.pending]: state => {
			state.isLoading = true
		},
		[getJournalContent.fulfilled]: (state, action) => {
			state.Journal = action.payload.data
			state.isLoading = false
		},
		[getJournalContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewLead, deleteLead } = journalslice.actions

export default journalslice.reducer