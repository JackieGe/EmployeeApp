/**
 * Created by jackie on 08/05/2017.
 */

class EmployeeListController {

    constructor() {
        this.employees = [
            'Jackie',
            'Tom'
        ];
    }

    selectEmployee(employee) {
        alert(`${employee} is selected`);
    }
}

EmployeeListController.$inject = [];

export default EmployeeListController