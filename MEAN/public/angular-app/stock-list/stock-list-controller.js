angular.module('meannasdaq').controller('StocksController', StocksController)

function StocksController($http) {
    var vm = this;
    vm.title = "MEAN NASDAQ App";
    $http.get('/api/stocks').then(function(response) {
        // console.log(response);
        vm.stocks = response.data;
    });
}