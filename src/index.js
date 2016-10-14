import Promise from 'bluebird';

/**
 * @param {Type}
 * @return {Type}
 */
export default (event, context) => (
  Promise.resolve({
    event,
    context,
  })
);
