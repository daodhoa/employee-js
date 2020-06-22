import { loadEmployeesSuccess, loadEmployeesError } from "../actions/employees"
import axios from "axios";

export const loadEmployees = () => {
    return dispatch => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
            dispatch(loadEmployeesSuccess(response.data.data))
        })
        .catch(() => dispatch(loadEmployeesError()))
    }
}