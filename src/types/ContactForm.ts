interface IContactKeys {
    first_name: string,
    last_name: string,
    email: string,
    message: string,
}

export interface IContactData {
    data: IContactKeys | null,
    errors: Partial<Record<keyof IContactKeys, string[]> | null>,
    success: boolean,
    message?: string,
} 