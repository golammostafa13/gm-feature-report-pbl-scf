import {CommonApiReturnData} from "../interfaces";

export const authSliceResult = (response: CommonApiReturnData) => {
    return response.data
}

export const authSliceResultMessage = (response: CommonApiReturnData): string => {
    return response.message
}

export const getRTKQErrorMessage = (error: any): string => {
    return error?.data?.message || 'Something Went Wrong'
}