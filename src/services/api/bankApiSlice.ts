import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getBaseURL} from "../../utils/baseURL";
import {loginCredentials, loginResponse, LoginResponse, RegisterData, UpdatePasswordDataType} from "../../interfaces";
import {authSliceResult, authSliceResultMessage} from "../../utils/rtkErrorUtil";
import {RootState} from "../store";

export const bankApiSlice = createApi({
  reducerPath: 'bank',
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
  tagTypes: ['bank','mother-limit','mother-limit-list'],
  endpoints: (builder) => ({
    getClientList: builder.query<any, string | void>({
      query: (clientId) => `/bank${clientId ? '/get/anchor-client/' + clientId : '/client-list'}`,
      providesTags: ['bank'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    getMotherLimitList: builder.query<any, string | void>({
      query: () => `/bank/mother-limit-list`,
      providesTags: ['mother-limit-list'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    getBranchLimit: builder.query<any, void>({
      query: () => ({
        url: '/bank/branch-list',
        method: 'GET'
      }),
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    setMotherLimit: builder.mutation<any, any>({
      query: ({supplier_name, ...data}) => ({
        url: '/bank/set/mother-limit',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['mother-limit-list'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    getMotherLimit: builder.query<any, string | undefined>({
      query: (companyId) => ({
        url: '/bank/get/mother-limit/' + companyId,
        method: 'GET'
      }),
      providesTags:['mother-limit'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    updateMotherLimit: builder.mutation<any, any>({
      query: ({address, name, approval_status, remarks, ...data}) => ({
        url: '/bank/update/mother-limit',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['mother-limit'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResultMessage(response),
    }),
    setAnchorLimit: builder.mutation<any, any>({
      query: ({buyer_name, ...data}) => ({
        url: '/bank/set/anchor-limit',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['mother-limit'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResultMessage(response),
    }),
    getAnchorLimit: builder.mutation<any, string>({
      query: (motherLimitId) => ({
        url: '/bank/get/anchor-limit/' + motherLimitId,
        method: 'GET'
      }),
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    updateAnchorLimit: builder.mutation<any, any>({
      query: ({buyer_name, ...data}) => ({
        url: '/bank/update/anchor-limit',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['mother-limit'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResultMessage(response),
    }),
    deleteAnchorLimit: builder.mutation<any, string>({
      query: (id) => ({
        url: '/bank/delete/anchor-limit/' + id,
        method: 'GET',
      }),
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
    }),
    // checker APIs
    updateMotherLimitStatus: builder.mutation<any, any>({
      query: (data) => ({
        url: '/bank/update/mother-limit-status',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['mother-limit-list'],
      transformResponse: (response: LoginResponse, meta, arg) => authSliceResultMessage(response),
    }),
  }),
})

export const {
  useGetClientListQuery,
  useGetMotherLimitListQuery,
  useSetMotherLimitMutation,
  useGetMotherLimitQuery,
  useUpdateMotherLimitMutation,
  useSetAnchorLimitMutation,
  useGetAnchorLimitMutation,
  useUpdateAnchorLimitMutation,
  useDeleteAnchorLimitMutation,
  useUpdateMotherLimitStatusMutation,
  useGetBranchLimitQuery
} = bankApiSlice