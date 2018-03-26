angular.module('meannasdaq').controller('StockController', StockController);

function StockController($routeParams, stockDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    stockDataFactory.stockDisplay(id).then(function(response) {
        vm.stock = response.data;
    });
}