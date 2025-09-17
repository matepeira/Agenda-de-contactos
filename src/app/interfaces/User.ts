export interface User {
    id: number,
    /** Nombre del usuario */
    firstName: string,
    /** Apellido del usuario */
    lastName: string,
    email: string,
    password: string
}

export type NewUser = Omit<User,"id">