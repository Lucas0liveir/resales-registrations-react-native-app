import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ICredentials, User } from "../dtos/UserDTOs";

interface IAuthContext {
    user: User;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState({} as User)


    return (
        <AuthContext.Provider
            value={
                {
                    user: {} as User
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}