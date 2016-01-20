var app =   angular.module('MyApp', ['ngMaterial', 'ngMessages']);

    // ******************************
    // Dynamic Invoice Controller
    // ******************************

(function() {
  'use strict';
  
    app.controller('InCtrl', ['$scope', function($scope) {
    
    //$scope.products = [{name: 'monitor'},{name: 'cables'},{name: 'desks'},{name: 'lamps'}];
      $scope.products = [];
      $scope.total = 0;
     
      $scope.removeProduct = function(index) {
        
        $scope.products.splice(index, 1);
        
        $scope.getTotal();
        
      }
      
    $scope.addRow = function(selection) {
      var name = JSON.parse(selection)["display"];
      $scope.products.push({
        name: name
      })
      }
    $scope.getTotal = function() {
      $scope.total = 0;
      //window.alert($scope.total);
      var quantities = document.getElementsByClassName("quantities");
      var prices = document.getElementsByClassName("prices");
      //window.alert(quantities[1].value);
      for(var i=0;i<prices.length;i++){
        $scope.total += (prices[i].value*quantities[i].value);
        //window.alert($scope.total);
      }
      //window.alert($scope.total);
      return $scope.total;
    }
    
    }
])})();

    // ******************************
    // Product List Controller
    // ******************************

(function() {
  'use strict';

    app.controller('ProdCtrl', ProdCtrl);

  function ProdCtrl($timeout, $q, $log) {
   var self = this;

    self.isDisabled    = false;

    // list of `state` value/display objects
    self.productsList        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for products... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.productsList.filter( createFilterFor(query) ) : self.productsList,
          deferred;
        return results;
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `products` list of key/value pairs
     */
    function loadAll() {
      var allProducts = 'Chair, Computer, Desktop, Monitor, Optical Mouse, Table, Wireless Keyboard';

      return allProducts.split(/, +/g).map( function (product) {
        return {
          value: product.toLowerCase(),
          display: product
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(productList) {
        return (productList.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();

// ******************************
// External Functions
// ******************************

/**
* Header Checkbox Functionality
*/
     
var table = document.querySelector('table');
var headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
var boxes = table.querySelectorAll('tbody .mdl-data-table__select');
var headerCheckHandler = function(event) {
  if (event.target.checked) {
    for (var i = 0, length = boxes.length; i < length; i++) {
      boxes[i].MaterialCheckbox.check();
    }
  } else {
    for (var i = 0, length = boxes.length; i < length; i++) {
      boxes[i].MaterialCheckbox.uncheck();
    }
  }
};

/**
* addProduct Button Functionality
*/

var b = document.getElementById('add product');
var addProduct = function(event) {
  var scope = angular.element(
  document.
  getElementById("invoice-card")).
  scope();
  scope.$apply(function () {
    scope.addRow(b.value);
  });

  var rows = document.getElementsByTagName('tr');
  componentHandler.upgradeAllRegistered();
  var i;
  for(i=0; i<rows.length; i++){
    componentHandler.upgradeElement(rows[i]);
  }
  boxes = table.querySelectorAll('tbody .mdl-data-table__select');
};

/**
* Remove Lines Button Functionality
*/

var rlb = document.getElementById('remove-product');

var removeProduct = function(event) {
  
  var boxesCheck = table.querySelectorAll('tbody .mdl-data-table__select input');
  
  //window.alert(boxesCheck[0].checked);
  
  for(var i=0; i<boxesCheck.length;i++) {
    if (boxesCheck[i].checked){
      //window.alert(i);
      boxes[i].parentNode.parentNode.remove();
      var scope = angular.element(
  document.
  getElementById("invoice-card")).
  scope();
  scope.$apply(function () {
    scope.removeProduct(i);
  });
    }
  }
  
};
b.addEventListener('click', addProduct);
headerCheckbox.addEventListener('change', headerCheckHandler);
rlb.addEventListener('click', removeProduct);