import { Component } from '@angular/core';
import { SlowInformation } from '@wtfisanapi/slow-ass-api';
import { BehaviorSubject } from 'rxjs';
import { SlowInformationService } from '../slow-information.service';

@Component({
  selector: 'wtfisanapi-slow-information',
  templateUrl: './slow-information.component.html',
  styleUrls: ['./slow-information.component.css']
})
export class SlowInformationComponent {
  public slowInformation: BehaviorSubject<
    SlowInformation
  > = new BehaviorSubject<SlowInformation>(undefined);

  public loading = false;
  public showMoreInfo = false;

  constructor(private slowInformationService: SlowInformationService) {}

  async getSlowInformation() {
    this.loading = true;
    this.showMoreInfo = false;
    const slowInfo = await this.slowInformationService.getSlowInfo();
    this.slowInformation.next(slowInfo);
    this.loading = false;
  }
}
