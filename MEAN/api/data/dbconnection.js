var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://'+process.env.IP+':27017/meannasdaq';

var _connection = null;

var open = function(){
    MongoClient.connect(dburl, function(err, db){
        if(err){
            console.log("DB connection failed");
            return;
        }
        _connection = db;
        console.log("DB connection open", db);
    });
    //set _connnection
};

var get = function(){
    return _connection;
};

module.exports = {
    open : open,
    get : get
};