var assert = require('power-assert');

var Sample = require('../lib/sample');

describe('Sample', function () {
    var sut;

    beforeEach(function () {
        sut = new Sample();
    });

    describe('.status', function () {
        it('は、trueであるべき', function () {
            assert.ok(sut.status === true);
        });
    });

    describe('#say()', function () {
        it('は、"Hello TDDBC!"が返ってくるべき', function () {
            assert(sut.say() === 'Hello TDDBC!');
        });
    });
});
