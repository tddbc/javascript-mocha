const assert = require('assert');

const Sample = require('../lib/sample');

describe('Sample', () => {
  let sut;

  beforeEach(() => {
    sut = new Sample();
  });

  describe('.status', () => {
    it('は、trueであるべき', () => {
      assert.ok(sut.status === true);
    });
  });

  describe('#say()', () => {
    it('は、"Hello TDDBC!"が返ってくるべき', () => {
      assert(sut.say() === 'Hello TDDBC!');
    });
  });
});
