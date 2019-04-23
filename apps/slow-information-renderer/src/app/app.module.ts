import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlowInformationComponent } from './slow-information/slow-information.component';
import { SlowInformationService } from './slow-information.service';
import { environment } from '../environments/environment';
import { StubSlowInformationService } from './stub-slow-information.service';

@NgModule({
  declarations: [AppComponent, SlowInformationComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: SlowInformationService,
      useClass: environment.stubSlowInformationService
        ? StubSlowInformationService
        : SlowInformationService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
