// Code goes here

var app = angular.module("demo", ['dndLists']).controller("SimpleDemoController", function ($scope, SimpleDemoService) {
    $scope.Schemas = SimpleDemoService.schemas;
    $scope.models = {
        selected: null,
        lists: { "Options": [], "Views": [{ NAME : "E", TYPE : "String"}] }
    };

    console.log($scope.Schemas.length);

    // Generate initial model
    for (var i = 0; i < $scope.Schemas.length; i++) {
        $scope.models.lists.Options.push($scope.Schemas[i]);
        console.log($scope.Schemas[i]);
    }

    // // Model to JSON for demo purpose
    // $scope.$watch('models', function (model) {
    //     $scope.modelAsJson = angular.toJson(model, true);
    // }, true);

});
