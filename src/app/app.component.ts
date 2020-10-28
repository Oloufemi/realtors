import { Component, OnInit } from '@angular/core';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';
import { MessagesModel } from './models/messages-model';
import { DisplayedMessage } from './models/displayed-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  realtors : RealtorsModel[];
  selectedAgenceId: number;
  messages : DisplayedMessage[];
  selectedMessagesId: number;
  messageInfo: MessagesModel;

  constructor( private realtorService: RealtorsService) {
    realtorService.getAllRealtors().subscribe((result) =>{
      this.realtors = result;
      this.selectedAgenceId = result[0].id;
      this.getMessages(this.selectedAgenceId);
    })
  }

  ngOnInit() {
  }

  getMessages(id : number): void {
    this.realtorService.getRealtorsMessages(id).subscribe((results) => {
      this.messages = results;
      this.selectedMessagesId = this.messages[0].id;
      this.getMessageInfo(this.selectedAgenceId, this.selectedMessagesId);
    })
  }

  getMessageInfo(idAgence: number, idMessage: number):void {
    this.realtorService.getMessage(idAgence, idMessage).subscribe((result) => {
      this.messageInfo = result;
    })
  }
}
