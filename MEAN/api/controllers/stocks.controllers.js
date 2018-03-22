var dbconn = require('../data/dbconnection.js');
var stockData = require('../data/nasdaqCompanyList.json');

module.exports.stocksGetAll = function(req, res){
    
    var db = dbconn.get();
    
    console.log("GET the stocks");
    console.log(req.query);
    
    var offset = 5;
    var count = 5;
    
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    
    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }        
    
    var returnData = stockData.slice(offset,offset+count);
    
    res
        .status(200)
        .json( returnData );  
};

module.exports.stocksGetOne = function(req, res){
    
    var db = dbconn.get();

    var stockId = req.params.stockId;
    var thisStock = stockData[stockId];
        console.log("GET stockId", stockId);
        res
            .status(200)
            .json( thisStock );  
};