/**
 * Created by jackie on 10/05/2017.
 */
class EmployeeBioContentController {
    constructor($scope) {
        this.employee = {};
        $scope.$on('onEmployeeArrived', (e, data) => {
            this.employee = data;
        })
    }
}

EmployeeBioContentController.$inject = ['$scope']

export default EmployeeBioContentController