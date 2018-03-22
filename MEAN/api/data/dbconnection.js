var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://'+process.env.IP+':27017/meannasdaq';

var _connection = null;

var open = function(){
    MongoClient.connect(dburl, function(err, client){
        if(err){
            console.log("DB connection failed");
            return;
        }
        _connection = client.db('meannasdaq');
        console.log("DB connection open", client);
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