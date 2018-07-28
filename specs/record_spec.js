const assert = require('assert');
const Record = require('../record');

describe("Record", function(){

  let record;

  beforeEach(function(){
    record = new Record('Fleetwood Mac', 'Rumours', 'Rock', 9);
  })

  it("record should be able to print it's own details", function(){
    str = 'Artist: ' + 'Fleetwood Mac' + '\n'
          + 'Title: ' + 'Rumours' + '\n'
          + 'Genre: ' + 'Rock' + '\n'
          + 'Price: ' + '9';
    let expected = str;
    let actual = record.printDetails();
    assert.deepStrictEqual(actual, expected);
  });

});
