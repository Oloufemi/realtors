import { Component, OnInit } from '@angular/core';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';
import { MessagesModel } from './models/messages-model';
import { DisplayedMessage } from './models/displayed-message';
import { Select, Store } from '@ngxs/store';
import { RealtorsState } from './state/realtors.state';
import { GetRealtors } from './state/realtors.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messageInfo: MessagesModel;

  @Select(RealtorsState.getAgencies)
  all$: RealtorsModel[];
  @Select(RealtorsState.getSelectedAgencyMessages)
  agencyMessage$: MessagesModel[];
  @Select(RealtorsState.getSelectedMessageDetails)
  selectedMessageDetails$: MessagesModel;

  constructor( private realtorService: RealtorsService, private readonly store : Store) {
    // realtorService.getAllRealtors().subscribe((result) =>{
    //   this.realtors = result;
    //   this.selectedAgenceId = result[0].id;
    //   this.getMessages(this.selectedAgenceId);
    // })
  }

  ngOnInit() {
    this.store.dispatch(new GetRealtors());
  }

  // getMessages(id : number): void {
  //   this.realtorService.getRealtorsMessages(id).subscribe((results) => {
  //     this.messages = results;
  //     this.selectedMessagesId = this.messages[0].id;
  //     this.getMessageInfo(this.selectedAgenceId, this.selectedMessagesId);
  //   })
  // }

  getMessageInfo(idAgence: number, idMessage: number):void {
    this.realtorService.getMessage(idAgence, idMessage).subscribe((result) => {
      this.messageInfo = result;
    })
  }
}
