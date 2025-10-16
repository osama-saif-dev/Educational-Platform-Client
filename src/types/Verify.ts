import { IUser } from "./User"

export interface ICode {
    code: string
}

export interface IVerifyData {
    user: IUser | null,
    access_token: string,
    errors: Partial<Record<keyof ICode, string[]> | null>,
    success: boolean,
    message?: string
}