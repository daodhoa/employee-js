import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/'>Company</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to='/employees'>Employees</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link className="navbar-brand" to='/'>
                                <span className="glyphicon glyphicon-user"></span> Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-brand" to='/'>
                                <span className="glyphicon glyphicon-log-in"></span> Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;