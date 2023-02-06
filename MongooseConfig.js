const mongooseConnect = require('mongoose');
mongooseConnect.connect("mongodb://localhost:27017/node_class");
const mongodb = require('mongodb');
module.exports = { mongooseConnect, mongodb }; 
