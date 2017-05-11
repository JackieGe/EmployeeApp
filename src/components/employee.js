/**
 * Created by jackie on 09/05/2017.
 */
import angular from 'angular'
import EmployeeListController from './employeeList/employeeListController'
import employeeListTemplate from './employeeList/employeeList.html'
import './employeeList/employeeList.css'

import EmployeeBioContentController from './employeeBioContent/employeeBioContentController'
import employeeBioContentTemplate from './employeeBioContent/employeeBioContent.html'
import './employeeBioContent/employeeBioContent.css'

import EmployeePageController from './employeePage/employeePageController'
import employeePageTemplate from './employeePage/employeePage.html'
import './employeePage/employeePage.css'

export default angular.module('employee', [])
    // employee list
    .controller('employeeListController', EmployeeListController)
    .directive('employeeList', function () {
        return {
            restrict: 'E',
            scope: {
                onEmployeeSelected:"&"
            },
            //replace: true,
            template: employeeListTemplate,
            controller: EmployeeListController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })
    // employee bio content
    .controller('employeeBioContentController', EmployeeBioContentController)
    .directive('employeeBioContent', function () {
        return {
            restrict: 'E',
            scope: {
                employee:"="
            },
            template: employeeBioContentTemplate,
            controller: EmployeeBioContentController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })
    // employee page, which would consist of the employee list and employee bio content
    .directive('employeePage', function () {
        return {
            restrict: 'E',
            scope: {},
            template: employeePageTemplate,
            controller: EmployeePageController,
            controllerAs: '$ctrl',
            bindToController: true
        }
    })