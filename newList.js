import React, {Component} from 'react';
import './newList.css';

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myList: ['1. Apples', '2. Bananas', '3. Grapefruit']
		};
	}

  render() {
	return (
	   <ol>
	   <ul className="editlist">
	   {this.state.myList.map((item) => {
			return <li>{item}</li>
	   })
	   }
		</ul>
	    </ol>
	  )
	}
  };
	export default List;
