var app = angular.module('MyApp', []);

(function() {
  'use strict';
  app.controller('MainCtrl', ['$scope', function($scope) {

    $scope.deleteInvoice = function() {

      window.alert($scope.invoiceCheck);
      for (var i = 0; i < $scope.invoiceCheck.length; i++) {
        window.alert($scope.invoiceCheck[i]);
      }

    }

    $scope.products = [{
      number: 12341234,
      name: 'Chair',
      defaultPrice: '$50.00'
    },{
      number: 12341235,
      name: 'Computer',
      defaultPrice: '$475.95'
    }, {
      number: 12341236,
      name: 'Desktop',
      defaultPrice: '$650.00'
    }, {
      number: 12341237,
      name: 'Monitor',
      defaultPrice: '$255.35'
    }, {
      number: 12341238,
      name: 'Optical Mouse',
      defaultPrice: '$35.99'
    }, {
      number: 12341239,
      name: 'Table',
      defaultPrice: '$87.05'
    }, {
      number: 12341240,
      name: 'Wireless Keyboard',
      defaultPrice: '$44.99'
    }                ];

    $scope.invoices = [{
      number: '1234567',
      customer: 'SteelBrick',
      date: 'Jan. 25, 2016',
      total: '$1,254.72'
    }, {
      number: '1234568',
      customer: 'SteelBrick',
      date: 'Jan 19, 2016',
      total: '$234.98'
    }, {
      number: '1234569',
      customer: 'SteelBrick',
      date: 'Jan 16, 2016',
      total: '$25,097.19'
    }, {
      number: '1234570',
      customer: 'SteelBrick',
      date: 'Dec 29, 2015',
      total: '$23.09'
    }];
    
  }])
})();

/**
* Hide Invoices and Products Functionality
*/

document.getElementById("table-toggle").onclick = function(e) {
  if (document.getElementById("invoice-table").style.display == "table") {
    document.getElementById("invoice-table").style.display = "none";
    document.getElementById("invoice-table").style.float = "right";
  } else {
    document.getElementById("invoice-table").style.display = "table";
    document.getElementById("invoice-table").style.float = "none";
  }
}

document.getElementById("products-table-toggle").onclick = function(e) {
  if (document.getElementById("products-table").style.display == "table") {
    document.getElementById("products-table").style.display = "none";
    document.getElementById("products-table").style.float = "right";
  } else {
    document.getElementById("products-table").style.display = "table";
    document.getElementById("products-table").style.float = "none";
  }
}

/**
* Header Checkbox Functionality
*/

//window.alert('start');
var table = document.getElementById('itable');
var headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
var boxes = document.getElementsByClassName('invoice-checks');
var headerCheckHandler = function(event) {
  //window.alert(boxes.length);
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

var table2 = document.getElementById('ptable');
var headerCheckbox2 = table2.querySelector('thead .mdl-data-table__select input');
var boxes2 = document.getElementsByClassName('product-checks');
var headerCheckHandler2 = function(event) {
  //window.alert(boxes2.length);
  if (event.target.checked) {
    for (var i = 0, length = boxes2.length; i < length; i++) {
      boxes2[i].MaterialCheckbox.check();
    }
  } else {
    for (var i = 0, length = boxes2.length; i < length; i++) {
      boxes2[i].MaterialCheckbox.uncheck();
    }
  }
};

var removeInvoices = function(event) {
  
  var boxesCheck = table.querySelectorAll('tbody .mdl-data-table__select input');
  
  for( var i=0; i<boxesCheck.length;i++) {
    if (boxesCheck[i].checked){
      boxes[i].parentNode.parentNode.remove();
    }
  }
  
}

var removeProducts = function(event) {
  
  var boxesCheck = table2.querySelectorAll('tbody .mdl-data-table__select input');
  
  for( var i=0; i<boxesCheck.length;i++) {
    if (boxesCheck[i].checked){
      boxes2[i].parentNode.parentNode.remove();
    }
  }
  
}
var dpb = document.getElementById('delete-product');
var dib = document.getElementById('delete-invoice');
dib.addEventListener('click', removeInvoices);
dpb.addEventListener('click', removeProducts);
headerCheckbox.addEventListener('change', headerCheckHandler);
headerCheckbox2.addEventListener('change', headerCheckHandler2);