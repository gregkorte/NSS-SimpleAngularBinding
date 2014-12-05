;(function(){
  'use strict';

	angular.module('todoApp', [//For importing other mods
		])
	.controller('TodoController', function(){
		var vm = this;
		vm.tasks = [{priority: '1', 
								name: '1st task', 
								desc: '1st task desc', 
								due: '1st due date'},
								{priority: '3',
								name: '3nd task',
								desc: '3nd task desc',
								due: '3nd due date'},
								{priority: '2',
								name: '2nd task',
								desc: '2nd task desc',
								due: '2nd due date'}]

		vm.addNewTask = function(){
			vm.tasks.push(vm.newTask);
			vm.newTask = null;
		};

		vm.removeTask = function(todo){
			var index = vm.tasks.indexOf(todo);
			vm.tasks.splice(index,1);
		};

	}); 

}());