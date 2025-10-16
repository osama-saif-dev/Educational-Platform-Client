export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: number | null,
    role: string,
    gender: string,
    city: string | null,
    address: string | null,
    age: string | null,
    email_verified_at: string | null,
    ex_years: string | null,
    desc: string | null,
    special_adress: string | null,
    image_url: string
}