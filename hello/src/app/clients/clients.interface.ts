export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    time: string;
    birthday: string;
    phone: string;
    email: string;
    city: string;
    isEditState?: boolean;
}