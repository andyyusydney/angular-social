import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
