export interface MessagesModel {
    body: string;
    contact: ContactModel;
    date: Date;
    id: number;
    read: boolean;
    subject: string;
    type: string;
}

export interface ContactModel {
    email: string; 
    firstname: string; 
    lastname: string; 
    phone: string; 
}

export interface MessageInfo {
    email: string;
    phone: string;
    clientName: string;
    dateOfMessage: string;
    messageContent: string;
    messageHour: string;
}