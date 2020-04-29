import React from 'react';
import './Projects.css';

const Projects = ({}) => {

	return (
		<div className="midcontainer">
			<section class="posts">
				<article>
					<header>
						<h2>Augmented Reality First Aid App</h2>
						<p class="projecttext"> Unity, C#, ARCore </p>
					</header>
					<ul>
						<li>Won <b>1st place</b> at Med App Jam, a 2-week app competition where groups make medically-oriented apps </li>
						<li> Integrated AR to simulate different first aid scenarios and guides the user how to treat multiple ailments such as burn emergencies or cardiac arrest </li>
					</ul>
				</article>
				<article>
					<header>
						<h2>Othello/Othello AI</h2>
						<p class="projecttext"> Python, TkInter, C++ </p>
					</header>
					<ul>
						<li> Built a fully functioning Othello game using Python with a custom-made graphical user interface. </li>
						<li> Later created an AI written in C++ that uses depth-first recursion in order to perform the most optimal moves to defeat an opponent.  </li>
						<li> AI received <b>18th place amongst 228</b> competing AI’s (excluding disqualified AI) </li>
					</ul>
					<ul class="actions special">
						<li><a href="#" class="button">Full Story</a></li>
					</ul> -->
				</article>
				<article>
					<header>
						<h2>Fabflix</h2>
						<p class="projecttext"> MySQL, Java, HTML, CSS, Ubuntu, Tomcat </p>
					</header>
					<ul>
						<li> Built a mock movie site similar to IMDB which uses Java servlets to communicates with a MySQL database running on an AWS instance in order to query movie information and perform simulated transactions </li>
					</ul>
				</article>
				<article>
					<header>
						<h2>SpellBook</h2>
						<p class="projecttext"> React, Javascript, HTML, CSS </p>
					</header>
					<ul>
						<li> Created a React app which takes in user input then queries an external API in order to retrieve appropriate information about the searched DnD spell. </li>
						<li> Later supplemented with CharacterSheet which parses JSON objects of character information then formats it. </li>
					</ul>
				</article>
				<article>
					<header>
						<h2>SpellChecker</h2>
						<p class="projecttext"> C++ </p>
					</header>
					<ul>
						<li> Created a spellchecker program which performs spell checks on large text files and outputs mistakes and suggestions (e.g. add a letter, remove a letter, replaces a letter) to the user </li>
						<li> Used data structures including binary search trees, AVL trees, and hash tables to store text and dictionary file. </li>
					</ul>
				</article>
				<article>
					<header>
						<h2>Twitter Streamer</h2>
						<p class="projecttext">  Apache Spark, Twitter API,  Scala </p>
					</header>
					<ul>
						<li>Used Spark Streaming and Twitter API in order to stream live tweet information. </li>
						<li>Used Spark/Scala to provide analysis of certain data such as most common hashtag, average word length, etc. </li>
					</ul>
				</article>
			</section>
		</div>
	);

}

export default Projects;