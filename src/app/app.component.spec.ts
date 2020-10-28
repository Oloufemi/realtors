import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RealtorsService } from './services/realtors.service';
import { DisplayedMessage } from './models/displayed-message';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { mockMessage, mockRealtors } from './constants/test';
import { RealtorsModel } from './models/realtors-model';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let realtorService: RealtorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClient, HttpHandler],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    realtorService = TestBed.get(RealtorsService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  // it('should get messages from service', () => {
  //   const messages: Array<DisplayedMessage> = [mockMessage];
  //   jest.spyOn(realtorService, 'getRealtorsMessages').mockReturnValue(of(messages));
  //   app.getMessages(6);
  //   expect(app.selectedMessagesId).toBe(6);
  //   expect(app.messages).toBe(messages);
  // });


});
