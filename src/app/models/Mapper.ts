import { Inject } from '@angular/core';
import { DisplayedMessage } from './displayed-message';
import { MessagesModel } from './messages-model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Mapper {
    constructor() {}

    messageModelToMessageDisplayed( messages : MessagesModel[]): DisplayedMessage[] {
        let result: DisplayedMessage[] = [];
        for( let message of messages) {
            let temp: DisplayedMessage = {
                id: message.id,
                messageContent: message.body.substring(0, 30), // Just to not show all the lorem ipsum
                name: message.contact.firstname + ' ' + message.contact.lastname,
                type: message.type,
                period: this.getPeriod(message.date)
            };
            result.push(temp);
        }
        return result;
    }
    getPeriod(date: Date):string {
        let messageDate = (new Date(date));
        let diff: number = Math.abs((new Date()).getTime() - messageDate.getTime()) / 3600000;
        const hours = Math.abs(Math.round(diff));
        if( hours >= 48 && hours < 168 ) {
            return '' + this.getDay(messageDate.getDay());
        }
        if( hours >=24 && hours < 48 ) {
            return 'Hier';
        }
        if(hours < 24 ) {
            return '' + messageDate.getHours() + ' : ' + messageDate.getMinutes();
        }
        let month = messageDate.getMonth() + 1;
        let year = messageDate.getFullYear() ;
        return messageDate.getDate() + '/' + month +'/'+ messageDate.getFullYear();
    }

    getDay(dayValue: number): string {
        switch(dayValue) {
            case 0: {
                return 'Dimanche';
            }
            case 1: {
                return 'Lundi';
            }
            case 2: {
                return 'Mardi';
            }
            case 3: {
                return 'Mercredi';
            }
            case 4: {
                return 'Jeudi';
            }
            case 5: {
                return 'Vendredi';
            }
            case 6: {
                return 'Samedi';
            }
            default: 
                return '';

        }
    }
}