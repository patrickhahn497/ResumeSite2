
import React from 'react';
// import 'tachyons';
import CSSModules from 'react-css-modules';
import './Navigation.css';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = ({onRouteChange, isNavPanelActive}) => {
	//the top panel can potentiallly be made into its own component
	//if 
	return (
		<div>
		{
			<nav className="navbar navbar-default">
			  <div className="">

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
			      	<li className={isNavPanelActive('home')} onClick={() => onRouteChange('home')}><a href="">Home</a></li>
			      	<li className={isNavPanelActive('academics')} onClick={() => onRouteChange('academics')}><a>Academics</a></li>
			      	<li className={isNavPanelActive('projects')} onClick={() => onRouteChange('projects')}><a>Projects</a></li>
			      	<li className={isNavPanelActive('experience')} onClick={() => onRouteChange('experience')}><a>Experience</a></li>
			      </ul>
			      {
			      // <ul className="nav navbar-nav navbar-right">
			      //   <li><a href="#">Subscribe <i className="fa fa-user-plus"></i></a></li>
			      // </ul>
			  		}
			    </div>
			  </div>
			</nav>
		}
		{
		 // <Navbar bg="dark" variant="dark">
		 //    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
		 //    <Nav className="mr-auto">
		 //      <Nav.Link href="#home">Home</Nav.Link>
		 //      <Nav.Link href="#features">Features</Nav.Link>
		 //      <Nav.Link href="#pricing">Pricing</Nav.Link>
		 //    </Nav>
		 //    <Form inline>
		 //      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		 //      <Button variant="outline-info">Search</Button>
		 //    </Form>
		 //  </Navbar>
		}

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

export default Navigation;










