import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.jsx";
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import ArtistInfo from "./artistinfo.jsx";
import MasterInfo from "./masterinfo.jsx";


document.addEventListener('DOMContentLoaded', function(){
    




ReactDOM.render(
	
				<Router history={hashHistory}>
					<Route path="/" component={App}></Route>		
					<Route path="/artist/:id" component={ArtistInfo}/>
					<Route path="/master/:id" component={MasterInfo}/>
				</Router>
				,
        document.getElementById('app')
    );
});





