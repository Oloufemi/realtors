import { Component, OnInit } from '@angular/core';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';
import { MessagesModel } from './models/messages-model';
import { DisplayedMessage } from './models/displayed-message';
import { Select, Store } from '@ngxs/store';
import { RealtorsState } from './state/realtors.state';
import { SetMessages, SetRealtors, SetUnreadMessages } from './state/realtors.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select(RealtorsState.getAgencies)
  all$: RealtorsModel[];
  @Select(RealtorsState.getSelectedAgencyMessages)
  agencyMessage$: MessagesModel[];
  @Select(RealtorsState.getSelectedMessageDetails)
  selectedMessageDetails$: MessagesModel;
  @Select(RealtorsState.getUnreadMessages)
  unreadMessages$: number;

  constructor( private realtorService: RealtorsService, private readonly store : Store) {
  }

  ngOnInit() {
    this.store.dispatch(new SetRealtors());
  }

  updateValues(newAgenceId: number): void {
    this.store.dispatch(new SetMessages(newAgenceId, 1));
    this.store.dispatch(new SetUnreadMessages(newAgenceId));
  }
}
