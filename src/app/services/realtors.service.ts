import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealtorsModel } from '../models/realtors-model';
import { MessagesModel } from '../models/messages-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealtorsService {
  apiUrl = 'http://35.205.232.120/';
  realtors: Array<RealtorsModel>;

  constructor( private _http: HttpClient) { }

  getAllRealtors(): Observable<Array<RealtorsModel>> {
    return this._http.get<RealtorsModel[]>(`${this.apiUrl}realtors`);
  }

  /**
   * 
   * @param id realtors Id
   */
  getRealtorsMessages(id: number): Observable<Array<MessagesModel>> {
    return this._http.get<MessagesModel[]>(`${this.apiUrl}realtors/${id}/messages`);
  }
}
