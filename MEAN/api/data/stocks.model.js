var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
    symbol : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    lastSale : {
        type : Number,
        required : true
    },
    marketCap : {
        type : String,
        required : true
    },
    ipoYear : {
        type : Number,
        },
    sector : {
        type : String,
        required : true
    },
    industry : {
        type : String,
        required : true
        },
    summaryQuote : {
        type : String,
        required : true
    }
});

mongoose.model('Stock', stockSchema);