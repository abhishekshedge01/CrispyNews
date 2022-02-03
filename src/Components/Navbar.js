import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'in' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="#">CrispyNews</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        {/* <select style={{ height: "40px", fontSize: "16px", borderColor: "purple" }} className="form-select form-select-lg bg-light rounded" aria-label=".form-select-lg example" onChange={this.handleChange}>
                            <option selected>Choose country</option>
                            <option value="in">India</option>
                            <option value="au">Australia</option>
                            <option value="us">United States</option>
                        </select> */}
                    </div>
                </nav>
            </div>
        )
    }
}
