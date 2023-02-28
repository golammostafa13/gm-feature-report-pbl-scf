import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getBaseURL} from "../../utils/baseURL";
import {loginCredentials, loginResponse, LoginResponse, RegisterData, UpdatePasswordDataType} from "../../interfaces";
import {authSliceResult, authSliceResultMessage} from "../../utils/rtkErrorUtil";
import {RootState} from "../store";

export const authApiSlice = createApi({
    reducerPath: 'auth',
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
    tagTypes: ['profile'],
    endpoints: (builder) => ({
        login: builder.mutation<loginResponse, loginCredentials>({
            query: (data) => ({
                url: '/security/signin',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['profile'],
            transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
        }),
        register: builder.mutation<any, RegisterData>({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['profile'],
            transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
        }),
        profileUpdate: builder.mutation<string, UpdatePasswordDataType>({
            query: (data) => ({
                url: '/security/update-password',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['profile'],
            transformResponse: (response: LoginResponse, meta, arg) => authSliceResultMessage(response),
        }),
        profileDetails: builder.query<RegisterData, void>({
            query: () => ({
                url: '/security/get-user-profile',
                method: 'GET'
            }),
            providesTags: ['profile'],
            transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
        }),
        logout: builder.mutation<RegisterData, void>({
            query: () => ({
                url: '/security/signout',
                method: 'GET'
            }),
            invalidatesTags: ['profile'],
            transformResponse: (response: LoginResponse, meta, arg) => authSliceResult(response),
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useProfileDetailsQuery,
    useProfileUpdateMutation,
    useLogoutMutation,
} = authApiSlice