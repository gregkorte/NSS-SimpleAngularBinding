;(function(){
  'use strict';

	angular.module('todoApp', [//For importing other mods
		])
	.controller('TodoController', function(){
		var vm = this;
		vm.tasks = [
			{
				priority: 'High', 
				name: '1st task', 
				desc: '1st task desc', 
				due: '1st due date'
			},
			{
				priority: 'Medium',
				name: '3nd task',
				desc: '3nd task desc',
				due: '3nd due date'
			},
			{
				priority: 'Low',
				name: '2nd task',
				desc: '2nd task desc',
				due: '2nd due date'
			}
		]

		vm.addNewTask = function(){
			vm.tasks.push(vm.newTask);
			vm.newTask = _freshTask();
		};

		vm.removeTask = function(todo){
			var index = vm.tasks.indexOf(todo);
			vm.tasks.splice(index,1);
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