var express = require('express');
var app = express();
var bucketRouter = express.Router();


var BucketListQuery = require('../client/db/BucketListQuery');

var query = new BucketListQuery();

bucketRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

module.exports = bucketRouter;