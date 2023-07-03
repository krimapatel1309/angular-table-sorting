var app = angular.module("myapp", []);

app.controller("myctrl", function ($scope) {

    // $scope.employeeList = [{ name: 'hello world', email: 'heeyyy123@gmail.com', dob: new Date("January 12, 1991"), done: false }];
    $scope.employeeList = [];

    $scope.toAdd = function () {
        if ($scope.txtname != "" && $scope.txtemail != "" && $scope.txtdob != "") {
            var date = $scope.txtdob.getDate() + '-' +  ($scope.txtdob.getMonth()+1) + '-' + $scope.txtdob.getFullYear();
            $scope.employeeList.push({ name: $scope.txtname, email: $scope.txtemail, dob: date, done: false });

            $scope.txtname = "";
            $scope.txtemail = "";
            $scope.txtdob = "";
        }
    };
    $scope.remove = function () {
        var oldList = $scope.employeeList;

        $scope.employeeList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) 
                $scope.employeeList.push(x);
        });
    };

    $scope.sortCol = "";
    $scope.reverseSort = false;

    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortCol == column) ? !$scope.reverseSort : false;
        $scope.sortCol = column;
    };

    $scope.getSortClass = function(column) {
        if($scope.sortCol == column) {
            return $scope.reverseSort ? 'arrow_down' : 'arrow_up';
        }
        return '';
    };
});