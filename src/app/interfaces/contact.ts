export interface Contact {
  image: string,
  id: number,
  firstName: string,
  lastName: string,
  address: string
  email: string,
  number: string,
  company: string
  isFavorite: boolean
}

/** Interfaz que es igual a Contact pero sin ID */
export type NewContact = Omit<Contact,"id">;
