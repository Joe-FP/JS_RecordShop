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
    customer = new Customer('Joe', 25);
    record1 = new Record('Fleetwood Mac', 'Rumours', 'Rock', 9);
    record2 = new Record('REO Speedwagon', 'Hi Infidelity', 'Rock', 12.5);
    record3 = new Record('John Denver', 'Higher Ground', 'Country', 11);
    let arrRecords = [record1, record2, record3];
    store.addRecords(arrRecords);
  })

  it("customer's record collection starts empty", function(){
    let expected = [];
    let actual = customer.collection;
    assert.deepStrictEqual(actual, expected);
  });

  it("customer can buy record - can afford", function(){
    customer.buyRecord(record1);
    // customer collection should contain purchased record
    let expected_collection = [record1];
    let actual_collection = customer.collection;
    assert.deepStrictEqual(actual_collection, expected_collection);
    // customer wallet should decrease by purchased record price
    let expected_wallet = 16;
    let actual_wallet = customer.wallet;
    assert.strictEqual(actual_wallet, expected_wallet);
  });

  it("customer can't buy record - can't afford", function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    // customer can't afford all 3 records
    // customer collection should only contain record 1 & 2
    let expected_collection = [record1, record2];
    let actual_collection = customer.collection;
    assert.deepStrictEqual(actual_collection, expected_collection);
    // customer wallet should decrease by purchased record prices
    let expected_wallet = 3.5;
    let actual_wallet = customer.wallet;
    assert.strictEqual(actual_wallet, expected_wallet);
  });

  it("customer can sell records they own", function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.sellRecord(record1);
    // sold record should be removed from customer's collection
    let expected_collection = [record2];
    let actual_collection = customer.collection;
    assert.deepStrictEqual(actual_collection, expected_collection);
    // customer wallet should increase by sold record price
    let expected_wallet = 12.5;
    let actual_wallet = customer.wallet;
    assert.strictEqual(actual_wallet, expected_wallet);
  });

  it("customer can view the total value of their collection", function(){
    customer.buyRecord(record1);
    customer.buyRecord(record3);
    let expected = 20;
    let actual = customer.getCollectionValue();
    assert.strictEqual(actual, expected);
  });

  it("customer can view the total value of their collection - by genre", function(){
    // I could refactor getCollectionValue to include an optional parameter 'genre',
    // then filter based on wether it has been supplied or not. The function could
    // then be used to find the total value of the collection by genre, by artist etc.
    // Is this a good idea, or is it function bloat?
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    let expected = 21.5;
    let actual = customer.getCollectionValueByGenre('Rock');
    assert.strictEqual(actual, expected);
  });

  it("customer can view their most valuable record", function(){
    customer.buyRecord(record1);
    customer.buyRecord(record2);
    customer.buyRecord(record3);
    let expected = record2;
    let actual = customer.getMostValuableRecord();
    assert.strictEqual(actual, expected);
  });

  it("customer can order records by value - asc", function(){
    let newCustomer = new Customer('Joe', 50);
    newCustomer.buyRecord(record1);
    newCustomer.buyRecord(record2);
    newCustomer.buyRecord(record3);
    let expected = [record1, record3, record2];
    let actual = newCustomer.orderRecords('price', 'asc');
    assert.deepStrictEqual(actual, expected);
  });

  it("customer can sort records by value - desc", function(){
    let newCustomer = new Customer('Joe', 50);
    newCustomer.buyRecord(record1);
    newCustomer.buyRecord(record2);
    newCustomer.buyRecord(record3);
    let expected = [record2, record3, record1];
    let actual = newCustomer.orderRecords('price', 'desc');
    assert.deepStrictEqual(actual, expected);
  });

  it("customer can compare collection value with another customer", function(){
    let customerA = new Customer('Joe', 50);
    customerA.buyRecord(record1);
    customerA.buyRecord(record2);
    let customerB = new Customer('Steve', 50);
    customerB.buyRecord(record2);
    customerB.buyRecord(record3);
    let expected = 'Joe: £21.5, Steve: £23.5';
    let actual = customerA.compareCollectionValue(customerB);
    assert.deepStrictEqual(actual, expected);
  });

































});
