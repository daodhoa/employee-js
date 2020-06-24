import React from 'react';
import { loadEmployees } from '../thunk/employee';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Employees extends React.Component {
    componentDidMount() {
        this.props.loadEmployees();
    }

    render() {
        const { loading, employees } = this.props;
        return (
            <div className="container">
                <h3>All Employees</h3>
                {loading && <p>In Loading</p>}
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Age</th>
                                <th scope="cole">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.employee_name}</td>
                                    <td>{employee.employee_salary}</td>
                                    <td>{employee.employee_age}</td>
                                    <td><Link to={`employees/${employee.id}`}>Detail</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    loadEmployees: () => dispatch(loadEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);