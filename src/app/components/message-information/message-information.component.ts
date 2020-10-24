import { MessagesModel } from '../../models/messages-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-information',
  templateUrl: './message-information.component.html',
  styleUrls: ['./message-information.component.scss']
})
export class MessageInformationComponent implements OnInit {
  @Input() messageDisplayed: MessagesModel;

  constructor() { }

  ngOnInit() {
    console.log(this.messageDisplayed);
  }

}
