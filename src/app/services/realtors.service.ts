import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealtorsModel } from '../models/realtors-model';

@Injectable({
  providedIn: 'root'
})
export class RealtorsService {
  apiUrl = 'http://35.205.232.120/';

  constructor( private _http: HttpClient) { }

  getAllRealtors(): RealtorsModel {
    this._http.get<RealtorsModel>(`${this.apiUrl}realtors`).subscribe((realtors) => {
      console.log(realtors);
    });
    return;
  }
}
