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
                messageContent: message.body.substring(0, 20), // Just to not show all the lorem ipsum
                name: message.contact.firstname + ' ' + message.contact.lastname,
                type: message.type,
                period: message.date.toString()
            };
            result.push(temp);
        }
        return result;
    }
    getPeriod(date: Date):number {
        let today: Date = new Date();
        let diff: number = (today.getTime() - date.getTime()) / 1000;
        diff /= (60 * 60);
        return Math.abs(Math.round(diff));
    }
}