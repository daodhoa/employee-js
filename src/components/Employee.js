import React from 'react';

class Employee extends React.Component {
    componentDidMount() {
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <h3>All Employees</h3>
            </div>
        );
    }
}

export default Employee;