import { LOAD_EMPLOYEE_START, LOAD_EMPLOYEE_ERROR, LOAD_EMPLOYEE_SUCCESS } from "../actions/actionTypes";

const initState = {
    loading: false,
    employees: [],
    error: false
};

export const employeesReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEE_START:
            return {
                ...state,
                loading: true
            };
        case LOAD_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case LOAD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.employees
            }
        default:
            return state
    }
}