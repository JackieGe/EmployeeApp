/**
 * Created by jackie on 08/05/2017.
 */

class EmployeeListController {

    constructor($scope) {
        this.$scope = $scope;

        this.employees = [
            { id:1, firstName: 'Jackie', lastName: "Ge", sex: "Male", age: 33, title: "Software developer" },
            { id:2, firstName: 'Lily', lastName: "Lee", sex: "Female", age: 28, title: "Designer" }
        ];

        this.selectedEmployee = undefined;
    }

    clickEmployee(employee) {
        let alertMessage = "";
        if (!this.selectedEmployee || this.selectedEmployee.id !== employee.id) {
            this.selectedEmployee = employee;
            alertMessage = `You have selected ${employee.firstName} ${employee.lastName}`;
        } else {
            this.selectedEmployee = undefined;
            alertMessage = `You deselected ${employee.firstName} ${employee.lastName}`;
        }

        this.$scope.$emit('onEmployeeSelected', this.selectedEmployee);
        setTimeout(() => {
            alert(alertMessage);
        })
    }

    getEmployeeRowStyle(employee) {
        if (this.selectedEmployee && this.selectedEmployee.id === employee.id) {
            return "selected-row"
        } else {
            return "";
        }
    }
}

EmployeeListController.$inject = ['$scope'];

export default EmployeeListController