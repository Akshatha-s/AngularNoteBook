var app = angular.module('notebookApp', []);

app.controller('noteBookCtrl', function($scope) {
	
	$scope.myArray=[];
	$scope.starterArray=[];
	$scope.exampleArray=[];
	$scope.flag=true;
	$scope.myFlag=true;
	$scope.starterFlag=true;
	$scope.exampleFlag=true;
	$scope.language=["Python","Sas"];
	
    $scope.noteBooks = [{"type": "my", "name": "Fears", "language": "Sas"},
	{"type": "starter", "name": "STARTER Fears", "language": "Python"},
	{"type": "starter", "name": "STARTER CDC Vial", "language": "Python"},
	{"type": "example", "name": "EXAMPLE CDC BRFS", "language": "Sas"},
	{"type": "my", "name": "CDC Vital", "language": "Python"},
	{"type": "example", "name": "EXAMPLE Relyson", "language": "Sas"},
	{"type": "starter", "name": "STARTER Explorys", "language": "Sas"},
	{"type": "example", "name": "EXAMPLE CDC VITAL", "language": "Python"}];
	
	for(note in  $scope.noteBooks){
		if($scope.noteBooks[note].type === "my")
			$scope.myArray.push($scope.noteBooks[note]);
		else if($scope.noteBooks[note].type === "starter")
			$scope.starterArray.push($scope.noteBooks[note]);
		else
			$scope.exampleArray.push($scope.noteBooks[note]);
	}
	
	$scope.showPanel = function(){
		if(!$scope.flag)
			$scope.flag=true;
		else
			$scope.flag=false;
	}
	
	$scope.checkFunction = function(){
		$scope.myFlag=$scope.my;
		$scope.starterFlag=$scope.starter;
		$scope.exampleFlag=$scope.example;
		if(!$scope.myFlag&&!$scope.exampleFlag&&!$scope.starterFlag){
            $scope.myFlag=true;
            $scope.starterFlag=true;
            $scope.exampleFlag=true;
        }
	}
	
	$scope.languageFunction = function(){
		if($scope.python && !$scope.sas)
              $scope.language="Python";
        else if(!$scope.python && $scope.sas)
              $scope.language="Sas";
		else
			$scope.language=["Python","Sas"];
	}
	
  });