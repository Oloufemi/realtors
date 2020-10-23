export interface MessagesModel {
    body: string;
    contact: Contact;
    date: string;
    id: number;
    read: boolean;
    subject: string;
    type: string;
}

export interface Contact {
    email: string; 
    firstname: string; 
    lastname: string; 
    phone: string; 
}