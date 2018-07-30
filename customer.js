const _ = require("lodash");

const Customer = function(name, wallet){
  this.name = name;
  this.collection = [];
  this.wallet = wallet;
};

Customer.prototype.buyRecord = function(record){
// check they can afford the record
  if(this.wallet >= record.price){
    this.collection.push(record);
    this.wallet -= record.price;
  };
};

// Customer.prototype.buyRecords = function(records){
//   // calculate total price of records
//   // check that customer can afford them
//   // if yes - buy them + add to collection
//   // if no - find combo of highest value, then buy
//   if(this.wallet >= record.price){
//     this.collection.push(record);
//     this.wallet -= record.price;
//   };
// };

Customer.prototype.sellRecord = function(record){
  // check they have the record
  if(this.collection.includes(record)){
    let index = this.collection.indexOf(record);
    this.collection.splice(index, 1);
    this.wallet += record.price;
  };
};

Customer.prototype.getCollectionValue = function(){
  return _.sumBy(this.collection, "price");
};

Customer.prototype.getCollectionValueByGenre = function(genre){
  return _.chain(this.collection)
          .filter(record => record.genre === genre)
          .sumBy("price")
          .value();
};

Customer.prototype.getMostValuableRecord = function(){
  return _.maxBy(this.collection, "price");
};

Customer.prototype.orderRecords = function(criteria, order){
  return _.orderBy(this.collection, criteria, [order]);
};

Customer.prototype.compareCollectionValue = function(customer){
  // 'this' customer
  let customerA = this.name + ': £' + this.getCollectionValue();
  // customer arg
  let customerB = customer.name + ': £' + customer.getCollectionValue();
  return customerA + ', ' + customerB
};

module.exports = Customer;
