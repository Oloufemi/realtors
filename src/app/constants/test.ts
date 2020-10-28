import { DisplayedMessage } from 'src/app/models/displayed-message';
import { RealtorsModel } from '../models/realtors-model';

export const mockMessage: DisplayedMessage = {
    id: 6,
    messageContent: 'test',
    name: 'test',
    type: 'test',
    period: 'test'
}

export const mockRealtors: RealtorsModel = {
    id: 10,
    name: 'Agence #101',
    logo: 'http://placehold.it/100x100?text=Agence+101',
    unread_messages: '76'
}