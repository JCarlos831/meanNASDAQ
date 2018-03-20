var stockData = require('../data/nasdaqCompanyList.json');

module.exports.stocksGetAll = function(req, res){
        console.log("GET the stocks");
        res
            .status(200)
            .json( stockData );  
};