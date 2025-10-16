export interface IRegisterKeys {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export interface IRegisterData {
    data?: IRegisterKeys | null,
    errors?: Partial<Record <keyof IRegisterKeys, string[]> >,
    success?: boolean,
    message?: string
}