/**
 * Created by jackie on 11/05/2017.
 */
export default class EmployeeService {
    constructor() {
        this.employees = [
            { id:1, firstName: 'Jackie', lastName: "Ge", sex: "Male", age: 33, title: "Software developer" },
            { id:2, firstName: 'Lily', lastName: "Lee", sex: "Female", age: 28, title: "Designer" }
        ];
    }

    getEmployees() {
        return this.employees;
    }
}