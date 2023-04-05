import React, {Component} from 'react';
import './newList.css';
//<script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>

  

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myList: ['1. Apples', '2. Bananas', '3. Grapefruit']
		};
	}
	
let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
	console.log(request);
	if(request.status == 200) {
		console.log(JSON.parse(request.response));
	} else {
		console.log(`error ${request.status} ${request.statusText}`)
	}

	XMHttpRequest();
	
/* 	componentDidMount() {
	

   * Sample JavaScript code for photoslibrary.albums.get
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  // npm that library that wraps
 /* function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/photoslibrary.readonly.appcreateddata"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); })
		.then(loadClient);
	  }
	  function loadClient() {
		gapi.client.setApiKey("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");
		return gapi.client.load("https://photoslibrary.googleapis.com/$discovery/rest?version=v1")
			.then(function() { console.log("GAPI client loaded for API"); },
				  function(err) { console.error("Error loading GAPI client for API", err); });
	  }
	  // Make sure the client is loaded and sign-in is complete before calling this method.
	  function execute() {
		return gapi.client.photoslibrary.albums.get({})
			.then(function(response) {
					// Handle the results here (response.result has the parsed body).
					console.log("Response", response);
				  },
				  function(err) { console.error("Execute error", err); });
	  }
	  gapi.load("client:auth2", function() {
		gapi.auth2.init({client_id: "354476212794-chj567j4v5adej3c7oc5c037vc1dd4uu.apps.googleusercontent.com"});
	  });
	} 
	**/

  render() {
	return (
	  //<div>
	   <ol>
	   <ul className="editlist">
	   {this.state.myList.map((item) => {
			return <li>{item}</li>
	   })
	   }
		</ul>
	    </ol>
		
		//<div>
		  //<button onClick={authenticate}>authorize and load</button>
		  //<button onClick={execute}>execute</button>
		//</div>
	  //</div>
	  )
	}
  };


  
	//const Require = require('browser-request');

	//Require({ method: "GET", uri: "https://youtube.com", header: {}}, function(error, response) {
		//if(error)
		//	throw new Error("XML PUT failed (" + error + "): HTTP status was " + response.status);
		//console.log("Stored the XML");
		//console.log(response); // response.body has the data 
	//});

	
	export default List;

