var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SDUMGO');

// set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/SDUMGO'
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// var db = mongoose.connection;
//
// db.on('error', function() {
//   console.log('mongoose connection error');
// });

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
