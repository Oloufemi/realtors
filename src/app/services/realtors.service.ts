import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealtorsModel } from '../models/realtors-model';
import { MessagesModel } from '../models/messages-model';

@Injectable({
  providedIn: 'root'
})
export class RealtorsService {
  apiUrl = 'http://35.205.232.120/';

  constructor( private _http: HttpClient) { }

  /**
   * Retrieve all realtors
   */
  getAllRealtors(): Array<RealtorsModel> {
    let realtors: Array<RealtorsModel>;
    this._http.get<RealtorsModel[]>(`${this.apiUrl}realtors`).subscribe((result) => {
      realtors = result;
      console.log(realtors);
    });
    return realtors;
  }

  /**
   * 
   * @param id Realtors Id
   */
  getRealtorsMessages(id: string): Array<MessagesModel> {
    let messages: Array<MessagesModel>;
    this._http.get<MessagesModel[]>(`${this.apiUrl}realtors/${id}/messages`).subscribe((result) => {
      messages = result;
    });
    return messages ;
  }
}
