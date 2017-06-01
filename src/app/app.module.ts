import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from "./layouts/mainlayout.component";
import { AppRoutingModule } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimeLineComponent } from "./timeline/timeline.component";
import { PopupService } from "./popup/popup.service";
import { MaterialModule } from "@angular/material";
import { PopupNewPostComponent } from "./popup/popup.newpost.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { PopupConfirmComponent } from "./popup/popup.confirm.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModalModule
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TimeLineComponent,
    PopupNewPostComponent,
    PopupConfirmComponent
  ],
  entryComponents:[
    PopupConfirmComponent
  ],
  providers: [PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
