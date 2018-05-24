import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskAssigmentComponent } from './activity-types/task-assigment/task-assigment.component';
import { SendSmsComponent } from './activity-types/send-sms/send-sms.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskAssigmentComponent,
    SendSmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
