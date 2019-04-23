import { Injectable } from '@angular/core';
import { SlowInformationService } from './slow-information.service';
import { SlowInformation } from '@wtfisanapi/slow-ass-api';

@Injectable({
  providedIn: 'root'
})
export class StubSlowInformationService implements SlowInformationService {
  private testSlowData: SlowInformation = {
    topic: 'mammals',
    fact: {
      interestLevel: 'reallyInteresting',
      body: 'have a tendency to skirt the issue'
    }
  };

  constructor() {
    window['stubSlowInfoService'] = {
      returnInterestingFact: () => {
        this.testSlowData.fact.interestLevel = 'holyCrudThatIsInteresting';
      },
      returnLessInterestingFact: () => {
        this.testSlowData.fact.interestLevel = 'reallyInteresting';
      },
      returnLeastInterestingFact: () => {
        this.testSlowData.fact.interestLevel = 'interesting';
      }
    };
  }
  getSlowInfo() {
    return Promise.resolve(this.testSlowData as SlowInformation);
  }
}
