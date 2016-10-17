import handler from './handler';

describe('Testing all the things!', () => {
  it('Should succeed', (done) => {
    handler(null, createLambdaContext({}, done));
  });
});
