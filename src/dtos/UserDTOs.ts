export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    token: string;
    refresh_token: string;
}

export interface ICredentials {
    email: string;
    password: string;
}