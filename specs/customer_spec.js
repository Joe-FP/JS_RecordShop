const assert = require('assert');
const Store = require('../store');
const Record = require('../record');
const Customer = require('../customer');

describe("Customer", function(){

  let customer;
  let store;
  let record1, record2, record3;

  beforeEach(function(){
    store = new Store('Music Shack', 'Glasgow');
    customer = new Customer('Joe');
    record1 = new Record('Fleetwood Mac', 'Rumours', 'Rock', 9);
    record2 = new Record('REO Speedwagon', 'Hi Infidelity', 'Rock', 12.5);
    record3 = new Record('John Denver', 'Higher Ground', 'Country', 11);
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
  })

  it("customer's record collection starts empty", function(){
    let expected = [];
    let actual = customer.collection;
    assert.deepStrictEqual(actual, expected);
  });

  it("customer can buy records", function(){
    customer.buyRecord(record1);
    // customer collection should contain purchased record
    let expected_collection = [record1];
    let actual_collection = customer.collection;
    assert.deepStrictEqual(actual_collection, expected_collection);
    // customer wallet should decrease by purchased record price
    let expected_wallet = 41;
    let actual_wallet = customer.wallet;
    assert.strictEqual(actual_wallet, expected_wallet);
  });

  it("customer can sell records", function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.sellRecord(record1);
    // customer collection should contain purchased record
    let expected_collection = [record2];
    let actual_collection = customer.collection;
    assert.deepStrictEqual(actual_collection, expected_collection);
    // customer wallet should increase by purchased record price
    let expected_wallet = 41;
    let actual_wallet = customer.wallet;
    assert.strictEqual(actual_wallet, expected_wallet);
  });

});
