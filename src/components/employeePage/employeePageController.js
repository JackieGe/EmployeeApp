class EmployeePageController {
    constructor () {
        this.selectedEmployee = undefined;
        this.onEmployeeSelected = (employee) => {
            this.selectedEmployee = employee;
        }
    }
}

export default EmployeePageController