import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RealtorsService } from './services/realtors.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let realtorService: RealtorsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    realtorService = TestBed.get(realtorService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

});
