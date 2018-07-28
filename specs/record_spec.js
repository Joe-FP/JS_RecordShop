const assert = require('assert');
const Record = require('../record');

describe("Record", function(){

  let record;

  beforeEach(function(){
    record = new Record('Fleetwood Mac', 'Rumours', 'Rock', 9);
  })

  // it("record should be able to print it's own details", function(){
  //   str = 'Artist: ' + 'Fleetwood Mac'
  //         + ' Title: ' + 'Rumours'
  //         + ' Genre: ' + 'Rock'
  //         + ' Price: ' + '9';
  //   let expected = str;
  //   let actual = record.printDetails();
  //   assert.deepStrictEqual(actual, expected);
  // });

});
