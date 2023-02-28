import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {motherLimit: {}, buyerLimit: {}, buyerList: []}
export const limitSlice = createSlice({
  name: 'limitSlice',
  initialState,
  reducers: {
    setLimitInfo: (state, action) => {
      const {stateName, data, fetchedDetails} = action.payload
      if (fetchedDetails) {
        state.motherLimit = fetchedDetails;
      } else {
        state.motherLimit[stateName] = data;
      }
    },
    setBuyerInfo: (state, action) => {
      const {stateName, data, fetchedDetails} = action.payload
      if (fetchedDetails) {
        state.buyerLimit = fetchedDetails;
      } else {
        state.buyerLimit[stateName] = data;
      }
    },
    addToBuyerList: (state, action) => {
      const {company_profile_id} = action.payload
      let inList = false
      const updatedList = state.buyerList.map((buyer: any) => {
        if (buyer?.company_profile_id === company_profile_id) {
          inList = true
          return action.payload
        }
        return buyer
      })
      if (inList)
        state.buyerList = updatedList
      else
        state.buyerList = [...state.buyerList, action.payload];
    },
    setLimitInfoFromAPI: (state, action) => {
      return {...state, ...action.payload}
    },
    removeFromBuyerList: (state, action) => {
      const {id} = action.payload
      state.buyerList = state.buyerList.filter((buyer: any) => buyer?.company_profile_id !== id);
    },
    resetLimitInfo: () => initialState,
    resetBuyerInfo: (state) => {
      state.buyerLimit = {
        anchor_limit:"",
        effective_date:"",
        status:"ACTIVE"
      };
    },
  },
})

export const {
  setLimitInfo,
  setBuyerInfo,
  resetBuyerInfo,
  resetLimitInfo,
  setLimitInfoFromAPI,
  addToBuyerList,
  removeFromBuyerList
} = limitSlice.actions;
export default limitSlice.reducer;