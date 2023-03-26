import React, {Component} from 'react';
import List from './newList';
import './newCont.css';

class Cont extends Component {
	constructor(props) {
		super(props);
	
		console.log(props);
		this.state = {
			myLab: 'Lab 10'
		};
	    }
	render() {
		return (
			<div id="foobar">
			  <h1>{this.state.myLab}</h1>
				<br>
				</br>
			<ul class="list-group">
				<li class= "list-group-item list-group-item-primary">Here is my list!</li>
				<li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
				<List />
			</ul>
			</div>
			)
		}
	}

	export default Cont;
