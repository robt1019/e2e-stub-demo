// Some HEAVILY over engineered types to prove a point

type ApprovedTopic = 'vowels' | 'mammals';
type ApprovedInterestLevel =
  | 'interesting'
  | 'reallyInteresting'
  | 'holyCrudThatIsInteresting';

export const approvedTopics: ApprovedTopic[] = ['vowels', 'mammals'];
export const approvedInterestLevels: ApprovedInterestLevel[] = [
  'interesting',
  'reallyInteresting',
  'holyCrudThatIsInteresting'
];
export const approvedFactBodies = [
  'are sometimes small',
  'have many different disguises',
  'cannot be trusted'
];

export interface SlowInformation {
  topic: 'vowels' | 'mammals';
  fact: {
    interestLevel:
      | 'interesting'
      | 'reallyInteresting'
      | 'holyCrudThatIsInteresting';
    body: string;
  };
}

export const slowAssApi = (() => {
  const randomElementFromArray = <T>(arr: T[]): T =>
    arr[Math.floor(Math.random() * arr.length)];

  /**
   * Return a number between 0 and a maxDelay in ms
   * @param maxDelay
   */
  const randomNetworkDelay = (maxDelay: number): number => {
    const min = Math.ceil(0);
    const max = Math.floor(maxDelay);
    const delay = Math.floor(Math.random() * (max - min)) + min;
    return delay;
  };

  const randomlyGeneratedSlowInformation = (): SlowInformation => ({
    topic: randomElementFromArray(approvedTopics),
    fact: {
      interestLevel: randomElementFromArray(approvedInterestLevels),
      body: randomElementFromArray(approvedFactBodies)
    }
  });

  /**
   * The tricksy method that will return a piece of SlowData after a variable amount of time.
   * To facilitate unit testing and because I'm lazy, and, well, because it's my
   * project so I will do as I please, this method can have its max delay specified,
   * but defaults to 10000
   * @param maxDelay
   */
  const getInformation = async (
    maxDelay: number = 10000
  ): Promise<SlowInformation> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(randomlyGeneratedSlowInformation());
      }, randomNetworkDelay(maxDelay));
    });
  };

  return {
    getInformation
  };
})();
