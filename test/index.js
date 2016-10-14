import test from 'blue-tape';
import backendmediaDecryption from '../src';

test('backendmediaDecryption', (assert) => {
  const event = {
    foo: 'bar',
  };

  return backendmediaDecryption(event)
    .then(response => assert.deepEqual({ context: undefined, event: { foo: 'bar' } }, response, 'return true'));
});
