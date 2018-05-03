import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
