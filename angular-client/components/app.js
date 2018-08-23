// // set up mongoose connection
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://localhost/SDUMGO'
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

angular.module('app')
.controller('AppCtrl', function(itemsService) {
  itemsService.getAll((data) => {
    this.items = data;
  });
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});
