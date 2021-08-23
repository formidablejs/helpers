const { config } = require('../lib');
const ConfigNotCachedError = require('../lib/Error/ConfigNotCachedError');

describe('Test the config helper method.', () => {

  test('Should throw an error if the config is not cached', () => {
    expect(() => {
      config('app.name')
    }).toThrow(ConfigNotCachedError);
  });

});