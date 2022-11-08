import { AxiosResponse, AxiosRequestConfig, AxiosResponseHeaders } from "axios"
import { api } from "../../services/api";

export interface Response<T> extends AxiosResponse<T, any> {
    message?: string;
}

export interface LoginError {
    status: number;
    message: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
    user: {
        name: string;
        email: string;
        avatar: string | null;
    }
}

export const login = async (email: string, password: string): Promise<Response<LoginResponse>> => {
    try {
        const response = await api.post("/accounts/sessions", { email, password }) as Response<LoginResponse>
        return response;
    } catch (error) {
        console.log(error)
        const errorResponse: Response<LoginResponse> = {
            status: 0,
            data: {} as LoginResponse,
            config: {} as AxiosRequestConfig,
            headers: {} as AxiosResponseHeaders,
            statusText: "",
            message: error.data.response
        }
        return errorResponse
    }
}

