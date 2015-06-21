angular.module('formExample1', [])
    .controller('ExampleController1', function($scope, $http) {


    	$scope.compte = [];
    	$scope.user1 = {
    			id_compte: "id_compte...",
    			plafond: "plafond...",
    			montant: "montant...",
    			
    	};
    	
    	$scope.saveCompte = function() {
    		var compte = $scope.user1;
    		$http.post('/compte', compte).success(function(data1) {
    			$scope.user1 = data1;
    		});
    	};
    	
    	$scope.asyncLoadCompte = function() {
    		$http.get('/getAllComptes').success(function(data1) {
    			$scope.compte = data1;
    		});
    	}
    });