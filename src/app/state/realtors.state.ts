import { RealtorsModel } from '../models/realtors-model';
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { MessagesModel } from '../models/messages-model';
import { RealtorsService } from '../services/realtors.service';
import { Injectable } from '@angular/core';
import { GetMessageDetails, GetMessages, GetRealtors } from './realtors.action';
import { map } from 'rxjs/operators';

export interface RealtorsStateModel {
  allAgencies: RealtorsModel[];
  selectedAgencyMessages: MessagesModel[];
  selectedMessageDetails: MessagesModel;
}

export const initialState: RealtorsStateModel = {
    allAgencies: null,
    selectedAgencyMessages: null,
    selectedMessageDetails: null
}

@State<RealtorsStateModel>({
  name: 'realtors',
  defaults: initialState
})

@Injectable() 
export class RealtorsState { 
  selectedAgenceId: number;
    constructor( private readonly realtorsService: RealtorsService) {}

    @Selector()
    static getAgencies(state: RealtorsStateModel) {
        return state.allAgencies;
    }
    @Selector()
    static getSelectedAgencyMessages(state: RealtorsStateModel) {
        return state.selectedAgencyMessages;
    }
    @Selector()
    static getSelectedMessageDetails(state: RealtorsStateModel) {
        return state.selectedMessageDetails;
    }

    @Action(GetRealtors)
    getRealtors( { patchState, dispatch}: StateContext<RealtorsStateModel> ) {
      this.realtorsService.getAllRealtors().subscribe((response) => {
        patchState({
          allAgencies: response,
        });
        this.selectedAgenceId = response[0].id;
        dispatch(new GetMessages(response[0].id, 1));
      });
    }
    @Action(GetMessages)
    getMessages({ patchState, dispatch}: StateContext<RealtorsStateModel>, { agenceId, page} : GetMessages ) {
      this.realtorsService.getRealtorsMessages(agenceId, page).subscribe((response) => {
        patchState({
          selectedAgencyMessages: response
        });
      dispatch(new GetMessageDetails(this.selectedAgenceId, response[0].id))
      });
    }
    @Action(GetMessageDetails)
    getMessageDetails({ patchState}: StateContext<RealtorsStateModel>, {agenceId, messageId}: GetMessageDetails ) {
      this.realtorsService.getMessage(agenceId, messageId).subscribe((response) => {
        console.log(response);
        patchState({
          selectedMessageDetails: response
        });
      });
    }
}
