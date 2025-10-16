interface IForgetPasswordKey {
    email: string
}

export interface IForgetPasswordData {
    data: IForgetPasswordKey | null,
    errors: Partial<Record<keyof IForgetPasswordKey, string[]> | null>,
    success: boolean,
    message?: string
}