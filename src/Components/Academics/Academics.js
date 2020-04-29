import React from 'react';
import './Academics.css';

const Academics = ({}) => {

	return (
		<div className="midcontainer academics-container">
			<h1> Academics</h1>

			<div id="degree" className="block">
				<h2> Bachelor's degree in Computer Science, </h2>
				<h2>University of California, Irvine</h2>
				<h3> GPA: 3.586 </h3>
				<h3> SAT: 2290 </h3>
			</div>
			<div className="block">
				<h2> Relevant Coursework </h2>
				<ul>
					<li> Programming in Python </li>
					<li> Programming in C++ </li>
					<li> Software Engineering </li>
					<li> Databases </li>
					<li> Data Structures</li>
					<li> Algorithm Design and Analysis </li>
					<li> Discrete Math for Computer Science </li>
					<li> Computer Networks and Security</li>
					<li> Applied Cryptography </li>
					<li> Web Applications </li>
					<li> Artificial Intelligence </li>
					<li> Machine Learning </li>

				</ul>
			</div>
		</div>
	);

}

export default Academics;