var assert = require('assert');
var cal = require('../calculator.js')

describe('Calculator', function(){
  describe('add', function(){
    it('add', function(){
      assert.equal('2', cal.add(1, 1));
    })
  })
  describe('multiply', function () {
      it('multiply', function () {
          assert.equal('5', cal.multiply(5, 1));
      })
  })
  describe('mod', function () {
      it('mod', function () {
          assert.equal('1', cal.multiply(25, 3));
          assert.equal('0', cal.multiply(25, -3));
      })
  })
  describe('isNumber', function () {
      it('isNumber', function () {
          assert.equal('1', cal.isNumber(9));
          assert.equal('0', cal.isNumber('*'));
      })
  })
})
