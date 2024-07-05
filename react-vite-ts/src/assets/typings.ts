export interface User {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
}

export interface Book {
    author: string;
    description: string;
    genre: string;
    id: number;
    image: string;
    isbn: string;
    published: string;
    publisher: string;
    title: string;
}

export interface DepartmentList {
    department: string;
    sub_departments: string[];
}