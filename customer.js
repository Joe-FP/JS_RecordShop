const Customer = function(name, wallet){
  this.name = name;
  this.collection = [];
  this.wallet = wallet;
}

Customer.prototype.buyRecord = function(record){
// check they can afford the record
  if(this.wallet >= record.price){
    this.collection.push(record);
    this.wallet -= record.price;
  }
}

Customer.prototype.sellRecord = function(record){
  // check they have the record
  if(this.collection.includes(record)){
    let index = this.collection.indexOf(record);
    this.collection.splice(index, 1);
    this.wallet += record.price;
  }
}


module.exports = Customer;
