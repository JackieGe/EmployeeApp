/*
The Employee Page acts as the parent of both Employee List and Employee Bio Content,
So it has the selectedEmployee that can be shared by its children.
 */

export default class EmployeePageController {
    constructor () {
        this.selectedEmployee = undefined;

        this.onEmployeeSelected = (employee) => {
            this.selectedEmployee = employee;
        }
    }
}