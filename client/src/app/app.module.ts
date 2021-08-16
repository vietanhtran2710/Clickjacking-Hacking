import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LawComponent } from './law/law.component';
import { NetComponent } from './net/net.component';
import { OfficeComponent } from './office/office.component';

@NgModule({
  declarations: [
    AppComponent,
    LawComponent,
    NetComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
