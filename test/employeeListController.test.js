/**
 * Created by jackie on 11/05/2017.
 */
import EmployeeListController from "../src/components/employeeList/employeeListController"

describe("Test EmployeeListController", function () {

    let controller;
    let employeeList;
    let selectedEmployee;

    beforeEach(function () {
        employeeList = [
            { id:101, firstName: 'Jackie', lastName: "Ge", sex: "Male", age: 33, title: "Software developer" },
            { id:102, firstName: 'Lily', lastName: "Lee", sex: "Female", age: 28, title: "Designer" }
        ];
        let employeeService = {
            getEmployees: function () {
                return employeeList;
            }
        }

        controller = new EmployeeListController(employeeService);
        controller.onEmployeeSelected = function () {
            return function (employee) {
                selectedEmployee = employee;
            }
        }
    })

    it("Should select the employee on the 1st click and highlight the row", function () {
        controller.clickEmployee(employeeList[0]);
        let rowStyle = controller.getEmployeeRowStyle(employeeList[0])
        expect(selectedEmployee).toBeTruthy();
        expect(selectedEmployee.id).toEqual(101);
        expect(rowStyle).toEqual("selected-row")
    })

    it("Should deselect the employee on the 2nd click", function () {
        controller.clickEmployee(employeeList[0]);
        controller.clickEmployee(employeeList[0]);
        let rowStyle = controller.getEmployeeRowStyle(employeeList[0])
        expect(selectedEmployee).toBeUndefined();
        expect(rowStyle).toBeFalsy();
    })

})