import { Component, Input, OnInit } from '@angular/core';
import { MessagesModel } from 'src/app/models/messages-model';
import { DisplayedMessage } from '../../models/displayed-message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: DisplayedMessage[];
  constructor() { }

  ngOnInit() {
  }

}
