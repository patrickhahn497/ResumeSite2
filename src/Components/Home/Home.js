import React from 'react';
import './Home.css';

const Home = ({}) => {

	return (
		<div className="starrybackground homecontainer ">
	        <div className="container ">
	          <div className="row">
	            <div className="col-lg-12">
	              <div id="content">
	                <h1>Patrick Hahn</h1>
	                  <h3>Recent grad in Computer Science and aspiring Software Engineer</h3>
	                <hr/>
	              </div>
	            </div>
	          </div>
	          <div className="buttoncluster">
	            <div className="row buttoncontainer" onclick="window.location='./Academics.html';">
	              <div className="col-lg-4"></div>
	              <div className="col-lg-4 expbutton">
	              	<a href="https://www.linkedin.com/in/patrick-hahn-973291135/">
		                <h3>
		                	<i class="fa fa-linkedin"></i>
		                	&nbsp; Linkedin
		                </h3>
		            </a>
	              </div>
	              <div className="col-lg-4"></div>
	            </div>
	            <div className="row buttoncontainer">
	              <div className="col-lg-4"></div>
	              <div className="col-lg-4 expbutton">
	              {

	              	<a href="https://github.com/patrickhahn497">
	              		<h3>
	              			<i class="fa fa-github"></i>
	              			&nbsp; GitHub
	              		</h3>
	              	</a>
	              	//<h3><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>  Projects</h3>

	              }
	                
	              </div>
	              <div className="col-lg-4"></div>
	            </div>
	          </div>
	        </div>
      	</div>
	);

}

export default Home;