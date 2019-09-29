import * as React from 'react';

const Navbar = (props: any) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar Header">
                    <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/registration">Register</a>
                    <a className="nav-item nav-link" href="/login">Login</a>
                    <a className="nav-item nav-link disabled" href="#" aria-disabled="true">Notification</a>
                    <a className="nav-item nav-link disabled" href="#" aria-disabled="true">Seat Allocation</a>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
