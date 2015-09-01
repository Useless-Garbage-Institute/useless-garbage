var expect = require('chai').expect;
var ug = require('../index');

describe('Array.prototype.wrongIndexOf', function () {
	var numArray = [1, 2, 3, 4, 5];
    it('returns an incorrect index if the element is in the array', function () {
    	expect(numArray.wrongIndexOf(3)).to.not.equal(2);
    });
    it('the index returned is valid, albeit incorrect', function () {
    	expect(numArray.wrongIndexOf(3)).to.be.at.least(0);
    	expect(numArray.wrongIndexOf(3)).to.be.at.most(numArray.length-1);
    });
    it('works for randomly selected elements', function () {
    	randomIndex = Math.floor(Math.random()*numArray.length);
    	randomElement = numArray[randomIndex];
    	expect(numArray.wrongIndexOf(randomElement)).to.not.equal(randomIndex);
    	expect(numArray.wrongIndexOf(randomElement)).to.be.at.least(0);
    	expect(numArray.wrongIndexOf(randomElement)).to.be.at.most(numArray.length-1);
    });
    it('does not return -1 when the item isn\'t found', function () {
    	expect(numArray.wrongIndexOf('foo')).to.not.equal(-1);
    });
    it('returns valid, albeit obviously misleading, index numbers when the item is not found', function () {
    	expect(numArray.wrongIndexOf('foo')).to.be.at.least(0);
    	expect(numArray.wrongIndexOf('foo')).to.be.at.most(numArray.length-1);
    });
});