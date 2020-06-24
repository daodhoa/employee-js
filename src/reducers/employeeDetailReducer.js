import { LOAD_EMPLOYEE_START, LOAD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_ERROR } from "../actionType/employeeDetail";

const initState = {
    loading: true,
    employee: {},
    error: false
}
export const employeeDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEE_START:
            return {
                ...state,
                loading: true
            }
        case LOAD_EMPLOYEE_SUCCESS:
            return {
                employee: action.employee,
                loading: false
            }
        case LOAD_EMPLOYEE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}