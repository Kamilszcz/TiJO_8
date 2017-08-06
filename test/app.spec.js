'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should return reversed number', function(){
        expect(app.reverseNumber(123)).to.eql(321);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should return letters froom argument', function(){
        expect(app.returnOnlyLetter('kamil123')).to.eql('kamil');
    });
});

describe('isEmail', function ()
{
    it('should return true when argument is email', function(){
        expect(app.isEmail('kamil123@gmail.com')).to.eql(true);
    });
});
