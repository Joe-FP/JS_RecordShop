const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printDetails = function(){
  let str;
  str = 'Artist: ' + this.artist
        + '  Title: ' + this.title
        + '  Genre: ' + this.genre
        + '  Price: ' + this.price;
  console.log(str);
}

module.exports = Record;
