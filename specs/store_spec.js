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
    record3 = new Record('John Denver', 'Higher Ground', 'Country', 11);
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
  })

  it("store should be able to add records", function(){
    let newRecord = new Record('some artist', 'some album', 'some genre', 10);
    store.addRecord(newRecord);
    let expected = [record1, record2, record3, newRecord];
    let actual = store.inventory;
    assert.deepStrictEqual(actual, expected);
  });

  // it("store should be able to print out all inventory details", function(){
  //   store.addRecord(record1);
  //   store.addRecord(record2);
  //   store.addRecord(record3);
  //   let expected = '';
  //   let actual = store.printInventoryDetails();
  //   assert.deepStrictEqual(actual, expected);
  // });

  it("store should be able to sell records", function(){
    store.sellRecord(record3);
    // sold record should be removed from store inventory
    let expected_inventory = [record1, record2];
    let actual_inventory = store.inventory;
    assert.deepStrictEqual(actual_inventory, expected_inventory);
    // store balance should increase by sold record price
    let expected_balance = 11;
    let actual_balance = store.balance;
    assert.strictEqual(actual_balance, expected_balance);
  });

  it("store should be able to report balance and inventory value", function(){
    store.sellRecord(record1);
    store.sellRecord(record2);
    let expected = 'Store balance: £21.5, Inventory value: £11';
    let actual = store.reportFinances();
    assert.strictEqual(actual, expected);
  });

  it("store can view all record of a given genre", function(){
    let expected = [record1, record2];
    let actual = store.byGenre('Rock');
    assert.deepStrictEqual(actual, expected);
  });
















});
