const assert = require('assert');
const Store = require('../store');
const Record = require('../record');

describe("Store", function(){

  let store;
  let record1, record2, record3;

  beforeEach(function(){
    store = new Store('Music Shack', 'Glasgow');
    record1 = new Record('Fleetwood Mac', 'Rumours', 'Rock', 9);
    record2 = new Record('REO Speedwagon', 'Hi Infidelity', 'Rock', 12.5);
    record3 = new Record('Neil Young', 'Harvest Moon', 'Rock', 11);
  })

  it("store should be able to add records", function(){
    store.addRecord(record1);
    let expected = [record1];
    let actual = store.inventory;
    assert.deepStrictEqual(actual, expected);
  });

});
