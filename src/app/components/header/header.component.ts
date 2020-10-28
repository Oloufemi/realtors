import { RealtorsModel } from '../../models/realtors-model';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() agencies: RealtorsModel[];
  @Output() changeAgency = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  getNewAgencyInfo(id: number):void {
    console.log('lefa' + id);
    this.changeAgency.emit(id);
  }
}
