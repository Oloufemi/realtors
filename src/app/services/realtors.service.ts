import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealtorsModel } from '../models/realtors-model';
import { MessagesModel } from '../models/messages-model';
import { map } from 'rxjs/operators';
import { Mapper } from '../models/Mapper';
import { DisplayedMessage } from '../models/displayed-message';

@Injectable({
  providedIn: 'root'
})
export class RealtorsService {
  apiUrl = 'http://35.205.232.120/';

  constructor( private _http: HttpClient, private readonly mapper: Mapper) { }

  getAllRealtors(): Observable<Array<RealtorsModel>> {
    return this._http.get<RealtorsModel[]>(`${this.apiUrl}realtors`);
  }

  /**
   * 
   * @param id realtors Id
   */
  getRealtorsMessages(id: number, page?: number): Observable<Array<MessagesModel>> {
    return this._http.get<MessagesModel[]>(`${this.apiUrl}realtors/${id}/messages/?page=${page}`);
    // .pipe(
    //   map( response => {
    //     return this.mapper.messageModelToMessageDisplayed(response);
    //   })
    // );
  }
  getMessage(agenceId: number, messageId: number): Observable<MessagesModel> {
    return this._http.get<MessagesModel>(`${this.apiUrl}realtors/${agenceId}/messages/${messageId}`);
  }
}
