/**
 * Created by jackie on 08/05/2017.
 */

export default class EmployeeListController {

    constructor(employeeService) {
        this.employees = employeeService.getEmployees();
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

        this.onEmployeeSelected()(this.selectedEmployee);

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

EmployeeListController.$inject = ['employeeService']