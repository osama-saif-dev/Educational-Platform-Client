interface IResetPasswordKeys {
    email: string | null,
    token: string | null,
    password: string,
    password_confirmation: string
}

export interface IResetPasswordData {
    data: IResetPasswordKeys | null,
    errors: Partial<Record<keyof IResetPasswordKeys, string[]> | null>,
    success: boolean,
    message?: string
}