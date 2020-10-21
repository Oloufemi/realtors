import { Component, OnInit } from '@angular/core';
import { RealtorsService } from './services/realtors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'realtors';
  constructor( private r: RealtorsService) {
  }

  ngOnInit() {
    this.r.getAllRealtors();
  }
}
