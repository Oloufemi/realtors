import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RealtorsState } from './state/realtors.state';
import { environment } from '../environments/environment';
import { NgxsModule, Store } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageInformationComponent } from './components/message-information/message-information.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageListComponent,
    MessageInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([RealtorsState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(
      {
        name : 'REALTORS STORE'
    }
    ),
    NgxsLoggerPluginModule.forRoot(),
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  