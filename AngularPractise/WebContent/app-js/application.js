

/*var app = angular.module('myApp', []);*/


/*
angular.module('myModule', ['chart.js']);
(function (ChartJsProvider) {
	  ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
	}); */

var myapp=angular.module("myApp",['ngRoute','chart.js','ngTouch','youtube-embed']);



myapp.config(function($routeProvider) {
    $routeProvider
    .when("/yoga", {
        templateUrl : "gallery.htm"
        
    })
    .when("/doughnut", {
        templateUrl : "chart.htm",
        controller : "BarCtrl"
    })
    .when("/video", {
       templateUrl : "video.htm"           
    })
    
    
    .otherwise({
    	templateUrl : "welcome.htm",
    })
});





/*
myapp.controller("DoughnutCtrl", function ($scope) {
	  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	  $scope.data = [300, 500, 100];
	  
	 
	});*/
myapp.controller("BarCtrl", function ($scope) {
	  $scope.labels = ['India', 'China', 'USA'];
	  $scope.series = ['India', 'China', 'USA'];

	  $scope.data = [
	    [31.7, 20.8, 17.7],
	    
	  ];
	});

myapp.controller('serctrl', ['$scope', '$window', function ($scope, $window) {
    $scope.redirectToGoogle = function () {
    //$scope.search;
    console.log("x is"+$scope.search);
        $window.open('https://www.google.com/#q='+$scope.search);
    };
}]);
