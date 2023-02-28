import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getBaseURL} from "../../utils/baseURL";
import {authSliceResult, authSliceResultMessage} from "../../utils/rtkErrorUtil";
import {RootState} from "../store";
import invoice from "../../utils/dummyData/invoice";

export const invoiceApiSlice = createApi({
  reducerPath: 'invoice',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseURL(),
    prepareHeaders: (headers, {getState}) => {
      const {token} = (getState() as RootState).userInfo;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['invoice', 'records'],
  endpoints: (builder) => ({
    getInvoiceList: builder.query<any, void>({
      query: () => `/supplier/invoice-list`,
      providesTags: ['invoice'],
      transformResponse: (response: any, meta, arg) => {
        return response?.data?.map((invoiceDetails: any) =>
            ({
              ...invoiceDetails,
              invoice_date: new Date(invoiceDetails.invoice_date).toISOString().split("T")[0],
              delivery_date: new Date(invoiceDetails.delivery_date).toISOString().split("T")[0],
            })
        )
      },
    }),
    getRecords: builder.query<any, void>({
      query: () => {
        return {
          url: `/project/record/4`,
          method: 'GET'
        }
      },
      providesTags: ['records'],
      transformResponse: (response: any, meta, arg) => authSliceResult(response),
    }),
    getInitialPage: builder.query<any, void>({
      query: () => {
        return {
          url: `/work-flow/get-inital-page-url`,
          method: 'POST',
          body:{
            project_id:"4"
          }
        }
      },
      transformResponse: (response: any, meta, arg) => authSliceResult(response)[0],
    }),
    getPage: builder.query<any, void>({
      query: () => {
        return {
          url: `/project/record/4`,
          method: 'GET'
        }
      },
      providesTags: ['records'],
      transformResponse: (response: any, meta, arg) => authSliceResult(response),
    }),
    startWorkFlow: builder.mutation<any, void>({
      query: () => {
        // todo: confirm project ID
        let data = {
          project_id: '4',
          wf_plan_start_date: new Date()
        }
        return {
          url: `/work-flow/generate-work-flow`,
          method: 'POST',
          body: data
        }
      },
      transformResponse: (response: any, meta, arg) => authSliceResult(response)[0],
    }),
    createInvoice: builder.mutation<any, void>({
      query: (wf_id) => {
        // todo: receive data from invoice-maker form
        let data = invoice
        return {
          url: `/supplier/add-invoice`,
          method: 'POST',
          body: {...data, wf_id}
        }
      },
      transformResponse: (response: any, meta, arg) => authSliceResult(response)[0],
    }),

  }),
})

// {
//   "wf_milestone_id": "17",
//     "wf_id": "10", ============================
//     "wf_number": "SCF Invoice_5",
//     "milestone_project_rel_id": "1",
//     "milestone_seq": "1",
//     "milestone_sla": "1",
//     "milestone_role_id": "14",
//     "milestone_action": "1",
//     "milestone_name": "Upload Invoice",
//     "milestone_ps_date": "2022-11-11",
//     "milestone_pe_date": "2022-11-11",
//     "assigned_user_id": "0",
//     "milestone_status": "Done",
//     "milestone_s_date": "2022-11-11",
//     "milestone_e_date": "2022-11-11",
//     "last_modified_user": null,
//     "last_modified_date": null,
//     "custom_input_val": null,
//     "islock": null,
//     "milestone_rollback_qnty": null,
//     "sla_consumed": null,
//     "on_hold_day": null,
//     "sourcemilestone": null
// }

export const {
  useGetInvoiceListQuery, useGetRecordsQuery, useGetInitialPageQuery, useCreateInvoiceMutation, useStartWorkFlowMutation
} = invoiceApiSlice;