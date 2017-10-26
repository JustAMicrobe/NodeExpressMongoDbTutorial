// defining schema for genres
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = Schema({
  name: {
    type: String
    , enum: ['Sci-Fi', 'Fantasy', 'Horror', 'Crime', 'Romance', 'Child', 'Unknown', 'Non-Fiction']
    , required: true
    , default: 'Unknown'
    , min: 3
    , max: 100
  }
});

// virtual for genre url
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

//export model
module.exports = mongoose.model('Genre', GenreSchema);