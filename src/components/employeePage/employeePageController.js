class EmployeePageController {
    constructor ($scope) {
        this.selectedEmployee = undefined;
        $scope.$on('onEmployeeSelected', (e, data) => {
            this.selectedEmployee = data;
            if (data) {
                $scope.$broadcast('onEmployeeArrived', data)
            }
        })
    }
}

EmployeePageController.$inject = ['$scope']

export default EmployeePageController