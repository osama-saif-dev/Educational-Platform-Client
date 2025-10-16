import { IUser } from "./User"

export interface ILoginKey {
    email: string,
    password: string
}

export interface ILoginData {
    data: ILoginKey | null,
    errors: Partial<Record<keyof ILoginKey, string[]> | null>,
    success: boolean,
    user?: IUser | null,
    access_token?: string,
    message?: string
}