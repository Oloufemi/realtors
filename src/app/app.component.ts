import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';
import { Observable } from 'rxjs';
import { RealtorsState } from './state/realtors.state';
import { GetRealtors } from './state/realtors.action';
import { MessagesModel } from './models/messages-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  realtors : RealtorsModel[];
  selectedAgenceId: number;
  messages : MessagesModel[];

  constructor( private realtorService: RealtorsService, private readonly store : Store) {
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
    })
  }
}
