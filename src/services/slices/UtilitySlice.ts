import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: '',
}
export const utility = createSlice({
  name: 'utilSlice',
  initialState,
  reducers: {
    setUtilityMessage: (state, action) => {
      state.message = action.payload
      state.type = 'success'
    },
    setUtilityErrorMessage: (state, action) => {
      state.message = action.payload.data.message
      state.type = 'error'
    },
    resetUtilityMessage: () => initialState,
  },
});

export const {setUtilityMessage, resetUtilityMessage, setUtilityErrorMessage} = utility.actions;
export default utility.reducer;