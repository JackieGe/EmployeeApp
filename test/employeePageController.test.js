/**
 * Created by jackie on 11/05/2017.
 */
import EmployeePageController from '../src/components/employeePage/employeePageController'

describe("Test EmployeePageController", function () {
    let controller;

    beforeEach(function () {
        controller = new EmployeePageController();
    })

    it("Should select the specified employee", function () {
        let employee = { id:101, firstName: 'Jackie', lastName: "Ge", sex: "Male", age: 33, title: "Software developer" };
        controller.onEmployeeSelected(employee);
        let selectedEmployee = controller.selectedEmployee;
        expect(selectedEmployee).toEqual(employee);
    })

})