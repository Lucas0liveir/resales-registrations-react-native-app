import { makeAutoObservable } from "mobx";
import { Command } from "..";
import { User } from "../../models/User";

export class LogoutCommand implements Command<{}> {

    public pending: boolean = false;

    public error: string | null = null;

    constructor () {
        makeAutoObservable(this);
    }

    canExecute(params?: {}): boolean {
        return true
    }

    async execute(params?: {}): Promise<void> {

            this.pending = true;
            const result = await User._logout()

            if (result.action === "success") {
                
            } else {
                this.error = result.action;
            }

            this.pending = false;
    }


}