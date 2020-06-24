import { LOAD_EMPLOYEE_START, LOAD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_ERROR } from "../actionType/employeeDetail"

export const loadEmployeeStart = () => ({
    type: LOAD_EMPLOYEE_START
});

export const loadEmployeeSuccess = (employee) => ({
    type: LOAD_EMPLOYEE_SUCCESS,
    employee
});

export const loadEmployeeError = () => ({
    type: LOAD_EMPLOYEE_ERROR
});