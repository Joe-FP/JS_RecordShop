const Customer = function(name){
  this.name = name;
  this.collection = [];
  this.wallet = 50;
}

Customer.prototype.buyRecord = function(record){
  this.collection.push(record);
  this.wallet -= record.price;
}


module.exports = Customer;
