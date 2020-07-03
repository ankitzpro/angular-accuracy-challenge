
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule , FormsModule,BrowserAnimationsModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent ,StartComponent,GameComponent,TimerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
