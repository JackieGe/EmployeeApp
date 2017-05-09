/**
 * Created by jackie on 09/05/2017.
 */
import angular from 'angular'
import EmployeeListController from './employeeList/employeeListController'
import employeeListTemplate from './employeeList/employeeList.html'
import employeeListCSS from './employeeList/employeeList.css'

export default angular.module('employee', [])
    .controller('employeeListController', EmployeeListController)
    .directive('employeeList', function () {
        return {
            restrict: 'E',
            scope: {

            },
            //replace: true,
            template: employeeListTemplate,
            controller: EmployeeListController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })