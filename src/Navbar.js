import { NavLink } from 'react-router-dom';


function Navbar() {
        return (
            <div>
                <NavLink to="/" exact className='App-Link'>Home</NavLink>
                <NavLink to="/about" exact>About</NavLink>
                <NavLink to="/contact" exact>Contact</NavLink>
            </div>
        )
}

export default Navbar