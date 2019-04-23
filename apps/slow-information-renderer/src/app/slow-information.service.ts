import { Injectable } from '@angular/core';
import { slowAssApi, SlowInformation } from '@wtfisanapi/slow-ass-api';

@Injectable({
  providedIn: 'root'
})
export class SlowInformationService {
  public async getSlowInfo(): Promise<SlowInformation> {
    return await slowAssApi.getInformation(2000);
  }
}
