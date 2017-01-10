'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
//var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/fizzBuzz.js');// root to app

describe("Test for divisibilty of numbers", function() {
  it("should return fizzbuzz  for 15", function() {
    expect((myApp.fizzBuzz(45))).toEqual("fizzbuzz");
  })
  it("should return Buzz  for 25", function() {
    expect(myApp.fizzBuzz(25)).toEqual("Buzz");
  })
  it("should return Buzz  for 5", function() {
    expect(myApp.fizzBuzz(5)).toEqual("Buzz");
  })
  it("should return fizz  for  9", function(){
    expect(myApp.fizzBuzz(9)).toEqual("fizz");
  })
  it("should return fizz  for  3", function(){
    expect(myApp.fizzBuzz(3)).toEqual("fizz");
  })
  it("should return 19  for  19", function(){
    expect(myApp.fizzBuzz(19)).toEqual(19);
  })
  it("should return 29 for  29", function(){
    expect(myApp.fizzBuzz(29)).toEqual(29);
  })
  it("should return 33  for  33", function(){
    expect(myApp.fizzBuzz(33)).toEqual("fizz");
  })
  it("should return 101  for  [3,11,70,15]", function(){
    expect(myApp.fizzBuzz(101)).toEqual(101);
  })
  it("should return [3,1182] for  [13,1182,17,15,3]", function(){
    expect(myApp.fizzBuzz(6)).toEqual("fizz");
  })
})