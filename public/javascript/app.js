angular.module('hotAndBothered', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		});

}])

.factory('heartrates', [function(){
	var o = {
		heartrates: []
	};
	return o;
}])

.controller('HomeController', ['$scope', 'heartrates', function($scope, heartrates){
	
	$scope.heartrates = heartrates.heartrates;

	$scope.addHeartrate = function(){
		if(!$scope.phoneNumber || $scope.phoneNumber === '') { return; }

		$scope.heartrates.push({
			phoneNumber: $scope.phoneNumber,
			heartrateBPM: $scope.heartrateBPM,
			DateTime: $scope.DateTime,
			source: $scope.source
		});

		$scope.phoneNumber = '';
		$scope.heartrateBPM = '';
		$scope.DateTime = new Date;
		$scope.source = '';
	};


}]);