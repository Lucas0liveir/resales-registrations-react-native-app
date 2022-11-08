import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { makePersistable, clearPersistedStore } from "mobx-persist-store";
import { login } from "../api";

declare type UserAction = "success" | "failure";

export interface LoginResult {
    action: UserAction;
    error?: any;
}

class UserModel {

    public authenticationToken: string | null = null;

    public refreshToken: string | null = null;

    public email: string | null = null;

    public name: string | null = null;

    public avatar: string | null = null;

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: "UserModel",
            properties: [
                "authenticationToken",
                "refreshToken",
                "email",
                "name",
                "avatar"
            ],
            storage: AsyncStorage
        })
    }

    public async _login(email: string, password: string): Promise<LoginResult> {
        const response = await login(email, password)

        if (response.status === 200) {
            runInAction(() => {
                this.authenticationToken = response.data.token
                this.refreshToken = response.data.refreshToken
                this.name = response.data.user.name
                this.email = response.data.user.email
                this.avatar = response.data.user.avatar
            })

            return {
                action: "success"
            }
        }

        return {
            action: "failure",
            error: response.message
        }
    }

    public async _logout() {
        try {
            await clearPersistedStore(this)
            runInAction(() => {
                this.authenticationToken = null
                this.refreshToken = null
                this.name = null
                this.email = null
                this.avatar = null
            })
            
            return {
                action: "success"
            }
        } catch (e) {
            console.log(e)
            return {
                action: "failure"
            }
        }
    }

}

export const User = new UserModel()