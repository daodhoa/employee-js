import { LOAD_EMPLOYEES_START, LOAD_EMPLOYEES_SUCCESS, LOAD_EMPLOYEES_ERROR } from "../actionType/employees";


const initState = {
    loading: true,
    employees: [],
    error: false
};

export const employeesReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEES_START:
            return {
                ...state,
                loading: true
            };
        case LOAD_EMPLOYEES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case LOAD_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.employees
            }
        default:
            return state
    }
}