import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlowInformationComponent } from './slow-information/slow-information.component';

@NgModule({
  declarations: [AppComponent, SlowInformationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
