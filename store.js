const Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype.addRecord = function(record){
  this.inventory.push(record);
}

module.exports = Store;
