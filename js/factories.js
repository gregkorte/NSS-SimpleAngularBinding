;(function(){
	'use strict';

	angular.module('todoApp')

.		factory('todoFactory', function($http){

			var fb = 'https://todo-list-nss-gk.firebaseio.com/list/'
				function getTodo(id, cb){
					$http.get('https://todo-list-nss-gk.firebaseio.com/list/' + id + '.json')
						.success(function(data){
							cb(data);
						})
						.error(function(err){
							console.log(err);
						});
					}

					function editTodo(id, todo){
						var url = 'https://todo-list-nss-gk.firebaseio.com/list/' + id + '.json';
						$http.put(url, todo)
						.success(function(data){
							$location.path('/');
						})
						.error(function(err){
							console.log('Edit is not working!');
						});
					}

					function getAllTodos(cb){
						$http.get('https://todo-list-nss-gk.firebaseio.com/list.json')
							.success(function(data){
								cb(data);
							})
							.error(function(err){
								console.log('Cannot get todo data!')
							});
					}

					function createTodo(task, cb){
						$http.post('https://todo-list-nss-gk.firebaseio.com/list.json', task)
							.success(function(data){
								cb(data);
							})
							.error(function(err){
								console.log('Create does not work!');
							});
					}

					function deleteTodo(todoId, cb){
						var url = 'https://todo-list-nss-gk.firebaseio.com/list/' + todoId + '.json';
						$http.delete(url)
						.success(function(){
							cb();
						})
						.error(function(err){
							console.log('Delete does not work!')
						});
					}

					var priorityOptions = {
						high: 'High',
						medium: 'Medium',
						low: 'Low'
					};

					return {
						getTodo: getTodo,
						editTodo: editTodo,
						getAllTodos: getAllTodos,
						createTodo: createTodo,
						deleteTodo: deleteTodo,
						priorityOptions: priorityOptions
					};
		})

}());