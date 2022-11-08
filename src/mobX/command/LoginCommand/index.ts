import { makeAutoObservable } from "mobx";
import { Command } from "..";
import { User } from "../../models/User";

export interface LoginCommandParams {
    email: string;
    password: string;
}

export class LoginCommand implements Command<LoginCommandParams> {

    public pending: boolean = false;

    public error: string | null = null;

    constructor () {
        makeAutoObservable(this);
    }

    async execute(params?: LoginCommandParams): Promise<void> {
        if (params) {
            this.pending = true;
            const result = await User._login(params.email, params.password)

            if (result.action === "success") {
                
            } else if (result.error) {
                this.error = result.error;
            }

            this.pending = false;
        }
    }

    canExecute(params?: LoginCommandParams): boolean {
        if (params) {
            if (!params.email || !params.password) {
                return false
            }
        }

        return !this.pending
    }

}