import React from 'react';
import './Projects.css';

const Projects = ({}) => {

	return (
		<div className="midcontainer">
			<h1 className="pagetitle"> Projects </h1>
			<section className="posts">
				<article>
					<header>
						<h2 className="title">Augmented Reality First Aid App</h2>
						<p className="projecttext"> Unity, C#, ARCore </p>
					</header>
					<ul>
						<li>Won <b>1st place</b> at Med App Jam, a 2-week app competition where groups make medically-oriented apps </li>
						<li> Integrated AR to simulate different first aid scenarios and guides the user how to treat multiple ailments such as burn emergencies or cardiac arrest </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">Othello/Othello AI</h2>
						<p className="projecttext"> Python, TkInter, C++ </p>
					</header>
					<ul>
						<li> Built a fully functioning Othello game using Python with a custom-made graphical user interface. </li>
						<li> Later created an AI written in C++ that uses depth-first recursion in order to perform the most optimal moves to defeat an opponent.  </li>
						<li> AI received <b>18th place amongst 228</b> competing AI’s (excluding disqualified AI) </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">Fabflix</h2>
						<p className="projecttext"> MySQL, Java, HTML, CSS, Ubuntu, Tomcat </p>
					</header>
					<ul>
						<li> Built a mock movie site similar to IMDB which uses Java servlets to communicates with a MySQL database running on an AWS instance in order to query movie information and perform simulated transactions </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">SpellBook</h2>
						<p className="projecttext"> React, Javascript, HTML, CSS </p>
					</header>
					<ul>
						<li> Created a React app which takes in user input then queries an external API in order to retrieve appropriate information about the searched DnD spell. </li>
						<li> Later supplemented with CharacterSheet which parses JSON objects of character information then formats it. </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">SpellChecker</h2>
						<p className="projecttext"> C++ </p>
					</header>
					<ul>
						<li> Created a spellchecker program which performs spell checks on large text files and outputs mistakes and suggestions (e.g. add a letter, remove a letter, replaces a letter) to the user </li>
						<li> Used data structures including binary search trees, AVL trees, and hash tables to store text and dictionary file. </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">Twitter Streamer</h2>
						<p className="projecttext">  Apache Spark, Twitter API,  Scala </p>
					</header>
					<ul>
						<li>Used Spark Streaming and Twitter API in order to stream live tweet information. </li>
						<li>Used Spark/Scala to provide analysis of certain data such as most common hashtag, average word length, etc. </li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">HeroPortal / HeroPortal API</h2>
						<p className="projecttext"> React, Javascript, HTML, CSS, Node.js, PostgreSQL </p>
					</header>
					<ul>
						<li> Created a React app which allows users to create hero profiles with formatted attributes, roles, and abilities. Depending on which contracts are posted at the time, users can be recommended for the most relevant jobs </li>
						<li> Employers can also post jobs which request heroes of a certain role or caliber.</li>
						<li> Built backend using Node.js for custom API and PostgreSQL for database management</li>
					</ul>
				</article>
				<article>
					<header>
						<h2 className="title">Connect Four / Connect Four AI</h2>
						<p className="projecttext">  Java </p>
					</header>
					<ul>
						<li>Built a fully functional game of Connect Four where a human player can play against an AI </li>
						<li>AI was built using a min-max algorithm coupled with a depth-first search to a recursion depth of 3. </li>
					</ul>
				</article>
			</section>
		</div>
	);

}

export default Projects;