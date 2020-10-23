import { RealtorsModel } from '../models/realtors-model';
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { MessagesModel } from '../models/messages-model';
import { RealtorsService } from '../services/realtors.service';
import { Injectable } from '@angular/core';
import { GetRealtors } from './realtors.action';
import { map } from 'rxjs/operators';

export interface RealtorsStateModel {
  allAgencies: RealtorsModel[];
  selectedAgencyMessages: MessagesModel[];
}

export const initialState: RealtorsStateModel = {
    allAgencies: null,
    selectedAgencyMessages: null
}

@State<RealtorsStateModel>({
  name: 'realtors',
  defaults: initialState
})

@Injectable() 
export class RealtorsState { 
    constructor( private readonly realtorsService: RealtorsService) {}

    @Selector()
    static getAgencies(state: RealtorsStateModel) {
        return state.allAgencies;
    }
}
