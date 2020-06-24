import { loadEmployeeStart, loadEmployeeSuccess, loadEmployeeError } from "../actions/employeeDetail"
import axios from "axios";

export const getDetail = (id) => {
    return dispatch => {
        dispatch(loadEmployeeStart());
        axios.get('http://dummy.restapiexample.com/api/v1/employee/' + id)
        .then(response => {
            dispatch(loadEmployeeSuccess(response.data))
        })
        .catch(() => dispatch(loadEmployeeError()))
    }
}