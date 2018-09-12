import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeListModule } from 'patternfly-sandbox-ng';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
