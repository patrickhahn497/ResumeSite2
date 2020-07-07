import React from 'react';
import './Experience.css';

const Experience = ({}) => {

	return (
		<div className="midcontainer exppage">
			<h1 className=""> Experience </h1>
			<div className="exp block">
				<div className="exptitle ">
					<h2> CoreLogic: Software Engineering Intern </h2>
					<h3 className="date"> June 2019-August 2019 </h3>
				</div>
				<ul>
					<li> Built and edited endpoints for both internal and external API’s which provided property data for users through the use of Java and Springboot </li>
					<li> Worked in a team in an extreme programming environment, incorporating practices such as test-driven development, continuous integration, and pair programming </li>
					<li> Helped build a pipeline to transfer data from Hive to Elastic </li>
					<li> Built and ran indexer jobs to query data from Hive then put them into indexes for Elasticsearch </li>
				</ul>
			</div>
			<div className="exp block top-border">
				<div className="exptitle">
					<h2> Magikid Robotics Lab: Instructor </h2>
					<h3 className="date"> November 2018 - June 2019 </h3>
				</div>
				<ul>
					<li> Taught childen how to build and program robots through the use of tools such as Wonder and Lego Mindstorms EV3. </li>
					<li> Taught children how to use Scratch to build animations and games. </li>
				</ul>
			</div>
			<div className="exp block top-border">
				<div className="exptitle">
					<h2> Infobank: Software Engineering Intern </h2>
					<h3 className="date"> June 2018 - August 2018 </h3>
				</div>
				<ul>
					<li> Used Spark dataframes in Scala to retrieve and analyze vehicle trip information stored in a Mongo database. (eg. Given coordinates, uses a geocoder to obtain the address then only returns information about a certain district) </li>
					<li> Conducted research and gathered relevant data regarding automated driving, provided translated summaries of insights to Korean co-workers with limited English comprehension. </li>
				</ul>
			</div>

		</div>
	);

}

export default Experience;