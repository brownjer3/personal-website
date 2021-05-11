import { Component } from "react";
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about" exact>Home</NavLink>
                <NavLink to="/contact" exact>Home</NavLink>
            </div>
        )
    }
}

export default Navbar