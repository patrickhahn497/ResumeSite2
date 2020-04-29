
import React from 'react';
// import 'tachyons';
import CSSModules from 'react-css-modules';
import './Navigation.css';

// import Button from 'react-bootstrap/Button';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = ({onRouteChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 
	return (
		<div>

			<nav className="navbar navbar-default">
			  <div className="container">

			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Patrick Hahn</a>
			    </div>


			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			      	<li className="active"><a href="">Home</a></li>
			      	<li><a href="">About</a></li>
			      	<li><a href="">Contact</a></li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="#">Subscribe <i className="fa fa-user-plus"></i></a></li>
			      </ul>
			    </div>>
			  </div>
			</nav>
{
			// <Navbar bg="dark" variant="dark">
			//     <Navbar.Brand onClick={() => onRouteChange('home')}>Patrick Hahn</Navbar.Brand>
			//     <Nav className="mr-auto">
			//       <Nav.Link onClick={() => onRouteChange('academics')}>Academics</Nav.Link>
			//       <Nav.Link onClick={() => onRouteChange('projects')}>projects</Nav.Link>
			//       <Nav.Link onClick={() => onRouteChange('experience')}>experience</Nav.Link>
			//     </Nav>
			// </Navbar>
		}
		</div>
	);

}

export default CSSModules(Navigation, {allowMultiple: true} );










