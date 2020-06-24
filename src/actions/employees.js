import { LOAD_EMPLOYEES_START, LOAD_EMPLOYEES_SUCCESS, LOAD_EMPLOYEES_ERROR } from "../actionType/employees"

export const loadEmployeesStart = () => ({
    type: LOAD_EMPLOYEES_START
});

export const loadEmployeesSuccess = (employees) => ({
    type: LOAD_EMPLOYEES_SUCCESS,
    employees
});

export const loadEmployeesError = () => ({
    type: LOAD_EMPLOYEES_ERROR
});