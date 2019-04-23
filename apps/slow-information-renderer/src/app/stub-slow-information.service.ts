import { Injectable } from '@angular/core';
import { SlowInformationService } from './slow-information.service';
import { SlowInformation } from '@wtfisanapi/slow-ass-api';

@Injectable({
  providedIn: 'root'
})
export class StubSlowInformationService implements SlowInformationService {
  getSlowInfo() {
    return Promise.resolve({
      topic: 'mammals',
      fact: {
        interestLevel: 'holyCrudThatIsInteresting',
        body: 'have a tendency to skirt the issue'
      }
    } as SlowInformation);
  }
}
