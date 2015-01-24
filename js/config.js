;(function(){
  'use strict';

  angular.module('todoApp')

		.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'views/table.html',
				controller: 'TodoController',
				controllerAs: 'todo'
			})
			.when('/new', {
				templateUrl: 'views/form.html',
				controller: 'TodoController',
				controllerAs: 'todo'
			})
			.when('/:id', {//Dynamic name for route
			templateUrl: 'views/show.html',
				controller: 'ShowController',
				controllerAs: 'show'
			})
			.when('/:id/edit', {//Dynamic name for route
			templateUrl: 'views/form.html',
				controller: 'EditController',
				controllerAs: 'todo'
			})
			.otherwise({redirectTo: '/'});
		})

}());