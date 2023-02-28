import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {invoiceData: {}, buyerLimit: {}, buyerList: []}
export const invoiceSlice = createSlice({
  name: 'limitSlice',
  initialState,
  reducers: {
    setInvoiceInfo: (state, action) => {
      const {stateName, data, fetchedDetails} = action.payload
      if (fetchedDetails) {
        state.invoiceData = fetchedDetails;
      } else {
        state.invoiceData[stateName] = data;
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
  setInvoiceInfo,
  setBuyerInfo,
  resetBuyerInfo,
  resetLimitInfo,
  setLimitInfoFromAPI,
  addToBuyerList,
  removeFromBuyerList
} = invoiceSlice.actions;
export default invoiceSlice.reducer;