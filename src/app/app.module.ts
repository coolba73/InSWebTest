import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainLayoutComponent } from "./layouts/mainlayout.component";

import { AppRoutingModule } from "./app.routing";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MdMenuModule, MdIconModule, MdButtonModule } from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
