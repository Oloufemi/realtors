import { RealtorsModel } from '../models/realtors-model';
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { MessagesModel } from '../models/messages-model';
import { RealtorsService } from '../services/realtors.service';
import { Injectable } from '@angular/core';
import { SetMessageDetails, SetMessages, SetRealtors, SetUnreadMessages } from './realtors.action';

export interface RealtorsStateModel {
  allAgencies: RealtorsModel[];
  selectedAgencyMessages: MessagesModel[];
  selectedMessageDetails: MessagesModel;
  unreadMessages: number;
}

export const initialState: RealtorsStateModel = {
    allAgencies: null,
    selectedAgencyMessages: null,
    selectedMessageDetails: null,
    unreadMessages: 0
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
    @Selector()
    static getUnreadMessages(state: RealtorsStateModel) {
        return state.unreadMessages;
    }

    @Action(SetRealtors)
    setRealtors( { patchState, dispatch}: StateContext<RealtorsStateModel> ) {
      this.realtorsService.getAllRealtors().subscribe((response) => {
        patchState({
          allAgencies: response,
          unreadMessages: parseInt(response[0].unread_messages)
        });
        this.selectedAgenceId = response[0].id;
        dispatch(new SetMessages(response[0].id, 1));
      });
    }
    @Action(SetMessages)
    setMessages({ patchState, dispatch}: StateContext<RealtorsStateModel>, { agenceId, page} : SetMessages ) {
      this.realtorsService.getRealtorsMessages(agenceId, page).subscribe((response) => {
        patchState({
          selectedAgencyMessages: response
        });
      dispatch(new SetMessageDetails(this.selectedAgenceId, response[0].id));
      });
    }
    @Action(SetMessageDetails)
    setMessageDetails({ patchState}: StateContext<RealtorsStateModel>, {agenceId, messageId}: SetMessageDetails ) {
      this.realtorsService.getMessage(agenceId, messageId).subscribe((response) => {
        patchState({
          selectedMessageDetails: response
        });
      });
    }
    @Action(SetUnreadMessages)
    setUnreadMessages({ patchState}: StateContext<RealtorsStateModel>, {agenceId}: SetUnreadMessages ) {
      this.realtorsService.getAllRealtors().subscribe((response) => {
        for(let agency of response) {
          if( agency.id === agenceId) {
            console.log('test:' + parseInt(agency.unread_messages));
            patchState({
              unreadMessages: parseInt(agency.unread_messages)
            });
          }
        }
      });
    }
}
