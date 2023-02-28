import {createSlice} from '@reduxjs/toolkit';

const initialState = localStorage ? {
  ...JSON.parse(localStorage.getItem('userInfo')!)
} : {
  user_name: null,
  token: null,
  menu_json:'[]'
}
export const userSlice = createSlice({
  name: 'userSlice',
  initialState:{...initialState, menu_json:JSON.parse(initialState.menu_json || '[]')},
  reducers: {
    logout: () => {
      localStorage.removeItem('userInfo')
      return {
        user_name: null,
        token: null
      }
    },
    setUserInfo: (state, action) => {
      state.user_name = action.payload.user_name;
      state.token = action.payload.access_token || state.token;
      state.role = action.payload.role;
      state.menu_json = JSON.parse(action.payload.menu_json);
      localStorage.setItem('userInfo', JSON.stringify({token: state.token, ...action.payload}))
    },
  },
});

export const {logout, setUserInfo} = userSlice.actions;
export default userSlice.reducer;