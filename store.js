const _ = require("lodash");

const Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
}

Store.prototype.printInventoryDetails = function(){
  this.inventory.forEach(function(record){
    record.printDetails()
  })
}

Store.prototype.sellRecord = function(record){
  let index = this.inventory.indexOf(record);
  if (index > -1) {this.inventory.splice(index, 1)};
  this.balance += record.price;
}

Store.prototype.reportFinances = function(){
  let storeBalance = this.balance;
  let iValue = _.sumBy(this.inventory, "price");
  return 'Store balance: £' + storeBalance + ', Inventory value: £' + iValue;
}

Store.prototype.byGenre = function(genre){
  return _.filter(this.inventory, record => record.genre === genre);
}

module.exports = Store;
