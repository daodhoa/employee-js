import { LOAD_EMPLOYEE_START, LOAD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_ERROR } from "./actionTypes"

export const loadEmployeesStart = () => ({
    type: LOAD_EMPLOYEE_START
});

export const loadEmployeesSuccess = (employees) => ({
    type: LOAD_EMPLOYEE_SUCCESS,
    employees
});

export const loadEmployeesError = () => ({
    type: LOAD_EMPLOYEE_ERROR
});