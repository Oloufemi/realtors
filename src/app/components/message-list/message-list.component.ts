import { Component, Input, OnInit } from '@angular/core';
import { MessagesModel } from 'src/app/models/messages-model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: MessagesModel[];
  constructor() { }

  ngOnInit() {
    console.log(this.messages);
  }

}
