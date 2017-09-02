(function() {

/***************
 * Common data *
 ***************/

var filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };

/***************
 * Controllers *
 ***************/

var app = angular.module('saomd');

app.controller('MainCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage, $controller) {

	var colors = Chart.defaults.global.colours;
	//Change Default Chart Colors
	Chart.defaults.global.colours = ["#0e91d3", "#F7464A", "#4D5360", "#97BBCD", "#F7464A", "#4D5360", "#4D5360"];
	colors = colors.splice(2,0,colors.splice(1,1)[0]);
	

	if (!$rootScope.hasOwnProperty('nightMode')) {
		$rootScope.nightMode = $storage.get('chars.night', false);
		$rootScope.$watch('nightMode',function(night) { $storage.set('chars.night', night); });
	}

	$scope.query = $state.params.query;

	$scope.$watch('query',function(query) {
		if (query === null || query === undefined || $scope.query == $stateParams.query) return;
		$state.go('.',{ query: $scope.query });
		$scope.table.parameters = CharUtils.generateSearcHParameters($scope.query, jQuery.extend({ }, $rootScope.filters));
	});

	$controller('DismissalCtrl');
	
	$scope.getRandChar = function(){
		var range = parseInt($rootScope.table.data.length) + 1;
		return $rootScope.table.data[Math.floor(Math.random() * range)][0];
	};

});

app.controller('SidebarCtrl',function($scope, $rootScope, $stateParams, $timeout, MATCHER_IDS) {

	if (!$rootScope.filters) $rootScope.filters = filters;

	$timeout(function() {
		$scope.$watch('filters',function(filters) {
			if (!filters || Object.keys(filters).length === 0) return;
			var data = jQuery.extend({ }, $rootScope.filters);
			$scope.table.parameters = CharUtils.generateSearcHParameters($stateParams.query, data);
			if (!$scope.$$phase) $scope.$apply();
		},true);
	});

	$scope.clearFilters = function() {
		filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };
		$rootScope.filters = { custom: [ ], classes: [ ], stars: [ ], cost: [ 1, 99 ] };
	};

	$scope.onFilterClick = function(e, value) {
		var type = null;
		if (e.target.hasAttribute('ng-model')) type = e.target.getAttribute('ng-model');
		else {
			var target = $(e.target);
			var child = target.find('.filter[ng-model]').first();
			if (child.length > 0) type = child.attr('ng-model');
			else {
				var parent = target.closest('.filter[ng-model]').first();
				if (parent.length > 0) type = parent.attr('ng-model');
			}
		}
		if (type === null) return;
		type = type.split(/\./)[1];
		$rootScope.filters[type] = ($rootScope.filters[type] == value ? null : value);
	};

	$scope.onClassClick = function(e, clazz) {
		if ($rootScope.filters.classes.indexOf(clazz) == -1) {
			$rootScope.filters.classes = $rootScope.filters.classes.slice(0,1);
			$rootScope.filters.classes.push(clazz);
		}
		else $rootScope.filters.classes.splice($rootScope.filters.classes.indexOf(clazz), 1);
	};

	$scope.onStarsClick = function(e, stars) {
		if ($rootScope.filters.stars.indexOf(stars) == -1) $rootScope.filters.stars.push(stars);
		else $rootScope.filters.stars.splice($rootScope.filters.stars.indexOf(stars), 1);
	};

	$scope.onDropFilterClick = function(e,value) {
		var tokens = e.target.getAttribute('ng-model').split(/\./).slice(1);
		var type = tokens[0], key = tokens[1];
		if (!$rootScope.filters.hasOwnProperty(type)) $rootScope.filters[type] = { };
		$rootScope.filters[type][key] = ($rootScope.filters[type][key] == value ? null : value);
	};

	$scope.filterData = window.matchers;

	$scope.repeat = function(n) {
		return (n < 1 ? [ ] : new Array(n));
	};

});

app.controller('DetailsCtrl',function($scope, $rootScope, $state, $stateParams, $timeout, $storage) {

	// data
	var id = parseInt($stateParams.id, 10);
	$scope.id = id;
	$scope.unit = jQuery.extend({},window.units[id - 1]);
	$scope.hybrid = $scope.unit.weapon && $scope.unit.weapon.constructor == Array;
	$scope.details = window.details[id];
//	$scope.cooldown = window.cooldowns[id - 1];
//	$scope.evolution = window.evolutions[id];
//	$scope.family = window.families[id - 1];
//	$scope.customLevel = { };

})();
});
