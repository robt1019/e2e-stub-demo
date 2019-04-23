import {
  slowAssApi,
  approvedTopics,
  approvedInterestLevels,
  approvedFactBodies
} from './slow-ass-api';

describe('slow ass api', () => {
  describe('getInformation', () => {
    it('should return a correctly typed random slice of slow data', async () => {
      for (let i = 0; i < 5; i++) {
        const result = await slowAssApi.getInformation(0);
        expect(approvedTopics.includes(result.topic)).toBeTruthy();
        expect(
          approvedInterestLevels.includes(result.fact.interestLevel)
        ).toBeTruthy();
        expect(approvedFactBodies.includes(result.fact.body)).toBeTruthy();
      }
    });
  });
});
