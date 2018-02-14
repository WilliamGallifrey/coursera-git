(function () {



angular.module('foodApp', [])

.controller('foodController', function($scope) {


$scope.items = "";
$scope.calcFood = function (){

	$scope.msg =  "";
	if($scope.items == "") {$scope.msg = "Please enter data";}
	
	else{


		var trimmed = $scope.items.split(",");
		
		var numItems = 0;

		for(var i = 0; i < trimmed.length; i++ ){
			
			if (trimmed[i] != "")
			numItems++;
		
		}

		if (numItems<= 3) {$scope.msg = "Enjoy!";}

		else $scope.msg = "Too much!";



	}

	
};


});


})();