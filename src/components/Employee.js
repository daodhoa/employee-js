import React from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../thunk/employeeDetail';

class Employee extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadDetail(id);
    }

    render() {
        const { employee, error } = this.props;
        return (
            <div className='container'>
                { error ? 'Something went wrong' : <h1>{employee.employee_name}</h1> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employee: state.employeeDetailReducer.employee,
    error: state.employeeDetailReducer.error
});

const mapDispatchToProps = dispatch => ({
    loadDetail: (id) => dispatch(getDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Employee);