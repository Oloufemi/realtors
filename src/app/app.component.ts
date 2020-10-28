import { Component, OnInit } from '@angular/core';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';
import { MessagesModel } from './models/messages-model';
import { DisplayedMessage } from './models/displayed-message';
import { Select, Store } from '@ngxs/store';
import { RealtorsState } from './state/realtors.state';
import { GetMessages, GetRealtors } from './state/realtors.action';

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

  constructor( private realtorService: RealtorsService, private readonly store : Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetRealtors());
  }

  updateValues(newAgenceId: number): void {
    console.log('yeah');
    this.store.dispatch(new GetMessages(newAgenceId, 1));
  }
}
