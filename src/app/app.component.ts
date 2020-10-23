import { Component, OnInit } from '@angular/core';
import { MessagesModel } from './models/messages-model';
import { RealtorsModel } from './models/realtors-model';
import { RealtorsService } from './services/realtors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  realtors : RealtorsModel[];
  selectedRealtorsMessages : MessagesModel[];
  constructor( private realtorService: RealtorsService) {
  }

  ngOnInit() {
    this.realtors = this.realtorService.getAllRealtors();
  }
}
