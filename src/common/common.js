/**
 * Created by jackie on 11/05/2017.
 */
import angular from 'angular'
import EmployeeService from './employeeService'

export default angular.module('common', [])
    .service('employeeService', EmployeeService);