;(function(){
  'use strict';

	angular.module('todoApp', [//For importing other mods
		])
	.controller('TodoController', function($http){
		var vm = this;

		$http.get('https://tic-tac-toe-nssgk.firebaseio.com/.json')
		.success(function(data){
			vm.tasks = data;
		})
		.error(function(err){
			console.log(err);
		});

		vm.addNewTask = function(){
			// vm.tasks.push(vm.newTask);

			$http.post('https://tic-tac-toe-nssgk.firebaseio.com/.json', vm.newTask)
				.success(function(data){
					vm.tasks[data.name] = vm.newTask;
					vm.newTask = _freshTask();
				});
		};

		vm.removeTask = function(todo){
			var id = todo
			var url = 'https://tic-tac-toe-nssgk.firebaseio.com/' + id + '.json';

			$http.delete(url);

			delete vm.tasks[todo];
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