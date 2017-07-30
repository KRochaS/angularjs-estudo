angular.module("app", []).controller("MyCtrl", function($scope) {
				$scope.lampStatus = true;
			    $scope.muda = function(){
					$scope.lampStatus = !$scope.lampStatus;
			    }
			  

			});