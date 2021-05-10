import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import './Navbar.css';
function Navbar()
{
	return(
		<nav className="navbar">
			<div className="nav-container">
			<NavLink exact to="/sudu" className="nav-logo" >
			bezKoder
			</NavLink>

			<ul className="nav-menu">
			<li className="nav-item"> 
			<NavLink exact to="/Add"  className="nav-link">
			add
			</NavLink>
			
			</li>

			<li className="nav-item">
			<NavLink exact to="/Tutorial" className="nav-link">
			Tutorial
			</NavLink>

			</li>
			</ul>
			</div>
		</nav>
		)
}
export default Navbar;