const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printDetails = function(){
  let str;
  str = 'Artist: ' + this.artist + '\n'
        'Title: ' + this.title + '\n'
        'Genre: ' + this.genre + '\n'
        'Price: ' + this.price;
  return str;
}

module.exports = Record;
