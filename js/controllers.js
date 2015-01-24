;(function(){
  'use strict';

  angular.module('todoApp')

	.controller('ShowController', function($routeParams, todoFactory){
			console.log(todoFactory);
 			var vm = this;
 			var id = $routeParams.id;
 			todoFactory.showTodo(id, function(data){
 				vm.task = data;
 			});
 			// $http.get('https://todo-list-nss-gk.firebaseio.com/' + id + '.json')
	 			// .success(function(data){
	 			// 	vm.task = data;
	 			// })
	 			// .error(function(err){
	 			// 	console.log(err);
	 			// });
	 	})

		.controller('EditController', function($http, $routeParams, $location){
 			var vm = this;
 			var id = $routeParams.id;
 			var url = 'https://todo-list-nss-gk.firebaseio.com/list/' + id + '.json'
	 			$http.get(url)
	 			.success(function(data){
	 				vm.newTask = data;
	 			})
	 			.error(function(err){
	 				console.log(err);
	 			});

		 	vm.addNewTask = function(){
	 			$http.put(url, vm.newTask)
	 			.success(function(data){
	 				$location.path('/')
	 			})
	 			.error(function(err){
	 				console.log(err);
	 			});
	 		};

	 		vm.priorityOptions = {
				high: 'High',
				medium: 'Medium',
				low: 'Low'
			};
 		})

	.controller('TodoController', function($http){
		var vm = this;
		$http.get('https://todo-list-nss-gk.firebaseio.com/.json')
		.success(function(data){
			vm.tasks = data;
		})
		.error(function(err){
			console.log(err);
		});

		vm.addNewTask = function(){
			$http.post('https://todo-list-nss-gk.firebaseio.com/.json', vm.newTask)
				.success(function(data){
					vm.tasks[data.name] = vm.newTask;
					vm.newTask = _freshTask();
				})
				.error(function(err){
					console.log(err);
				});
		};

		vm.removeTask = function(todoId){
			var url = 'https://todo-list-nss-gk.firebaseio.com/list/' + todoId + '.json';
			$http.delete(url)
				.success(function(){
					delete vm.tasks[todo];
				})
				.error(function(err){
					console.log(err);
				});
		};

		vm.newTask = _freshTask();

		vm.priorityOptions = {
				high: 'High',
				medium: 'Medium',
				low: 'Low'
			};

		function _freshTask(){
			return {
				priority: 'low'
			}
		};

	});

}());