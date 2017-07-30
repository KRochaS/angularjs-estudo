angular.module("MyApp",[]).controller("MyCrtl", function($scope) {
	$scope.palavra="";
	$scope.InvertePalavra = function(palavra) {
		var inv='';
		for(var i=palavra.length -1; i>=0; i--) {
			inv=inv+palavra[i];
		}

	return inv;

	}
});