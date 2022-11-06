export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    birthday?: string;
    isBlocked: boolean;
    isActive?: boolean;
}