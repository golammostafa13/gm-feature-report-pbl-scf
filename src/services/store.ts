import {configureStore} from '@reduxjs/toolkit'
import {bankApiSlice} from './api/bankApiSlice';
import {invoiceApiSlice} from './api/invoiceApiSlice';
import {authApiSlice} from "./api/authApiSlice";
import userReducer from "./slices/userSlice";
import limitReducer from "./slices/limitSlice";
import invoiceReducer from "./slices/invoiceSlice";
import utilityReducer from "./slices/UtilitySlice";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [bankApiSlice.reducerPath]: bankApiSlice.reducer,
    [invoiceApiSlice.reducerPath]: invoiceApiSlice.reducer,
    userInfo: userReducer,
    limitInfo: limitReducer,
    invoiceInfo: invoiceReducer,
    utility: utilityReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApiSlice.middleware,
        bankApiSlice.middleware,
        invoiceApiSlice.middleware,
      ])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch