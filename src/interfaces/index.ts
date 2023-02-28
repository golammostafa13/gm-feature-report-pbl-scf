export interface loginCredentials {
    user_name: string;
    password: string;
}

export interface loginResponse {
    role: string,
    access_token: string,
    token_type: string,
    access_token_expire_in: string,
    user_name: string
}

export interface RegisterData {
    user_name: string;
    password: string;
}

export interface UpdatePasswordDataType {
    confirmPassword: string;
    password: string;
    oldPassword: string;
}

export interface LoginResponse extends CommonApiReturnData {
    data: {
        user_name: string,
        token: string
    };
}

export interface CommonApiReturnData {
    data: any,
    message: string,
    success: boolean
}
