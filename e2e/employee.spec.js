/**
 * Created by jackie on 16/05/2017.
 */

describe("Employee List Test", function () {
    var employeeList = element.all(by.repeater('employee in $ctrl.employees'))
    var bioContentDiv = element.all(by.id('employeeBioContent'))

    beforeAll(function () {
        browser.get('http://localhost:8081/')
    })

    it('Should display employee list without bio content', function () {
        expect(browser.getTitle()).toEqual('Employee App')
        expect(employeeList.count()).toEqual(2)
        expect(bioContentDiv.count()).toEqual(0)
    })

    it('Should show the employee bio content on first click', function () {
        employeeList.first().click()
        browser.sleep(10)
        browser.switchTo().alert().accept()
        var firstName = element(by.binding('$ctrl.employee.firstName'))
        var lastName = element(by.binding('$ctrl.employee.lastName'))
        var title = element(by.binding('$ctrl.employee.title'))
        expect(firstName.getText()).toEqual('Jackie')
        expect(lastName.getText()).toEqual('Ge')
        expect(title.getText()).toEqual('Software developer')
    })

    it('Click on another employee and should display the bio content', function () {
        employeeList.last().click()
        browser.sleep(10)
        browser.switchTo().alert().accept()
        var firstName = element(by.binding('$ctrl.employee.firstName'))
        var lastName = element(by.binding('$ctrl.employee.lastName'))
        var title = element(by.binding('$ctrl.employee.title'))
        expect(firstName.getText()).toEqual('Lily')
        expect(lastName.getText()).toEqual('Lee')
        expect(title.getText()).toEqual('Designer')
    })

    it('Hide the bio content on the second click', function () {
        employeeList.last().click()
        browser.sleep(10)
        browser.switchTo().alert().accept()
        expect(bioContentDiv.count()).toEqual(0)
        browser.sleep(10)
    })

})